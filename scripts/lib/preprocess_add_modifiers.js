const {
  addScriptTag,
  scriptIndexStart,
  parseHtml,
  trimQuotes
} = require('svelte-plugin-node/scripts/lib/parse_utilites');
const svelte = require('svelte/compiler');
const { relative, resolve, parse } = require('path');

const MagicString = require('magic-string');
const get_css_modifiers = require('./get_css_modifiers');
const kebabCase = require('kebab-case');
const unique = require('@wareset/unique');

const CACHE = {};

function toModifier(v) {
  let res = kebabCase.reverse(v).replace(/\W+/g, '');
  if (res[0] === `${+res[0]}`) res = `n${res}`;
  return res;
}

function set_class_from_node(content, v) {
  const inject = trimQuotes(content.slice(v.start + 6, v.end));
  // inject = inject[0] === '{' ? inject.slice(1, -1) : JSON.stringify(inject);
  return JSON.stringify(inject);
}

function set_style_from_node(content, v) {
  let inject = trimQuotes(content.slice(v.start + 6, v.end));
  inject = inject[0] === '{' ? inject.slice(1, -1) : JSON.stringify(inject);
  return inject;
}

function walker(content, modifiers) {
  let NODE;

  svelte.walk(parseHtml(content), {
    enter(node, parent, prop /*, index*/) {
      if (NODE) {
        this.skip();
        return;
      }
      if (prop !== 'attributes') return;
      if (node.name !== 'class') return;
      if (!Array.isArray(node.value)) return;
      // console.log(prop, node);

      node.value.some(v => {
        v = v.data || v.raw;
        if (v && ~v.split(/\s+/g).indexOf(modifiers.className)) NODE = parent;
        return !!NODE;
      });
    }
  });

  if (!NODE) return content;
  const magic = new MagicString(content);

  let inject;
  NODE.attributes.forEach(v => {
    // console.log(v);
    if (v.name === 'class') {
      inject = set_class_from_node(content, v);
      inject =
        inject.slice(0, -1) +
        ` {__CLASS__} {__CLASSES__(${JSON.stringify(
          modifiers.className
        )}, { ${modifiers.modifiers
          .map(v => {
            const prop = toModifier(v);
            if (v === prop) return prop;
            return JSON.stringify(v) + ': ' + prop;
          })
          .join(', ')} })}` +
        inject.slice(-1);
      inject = ` class=${inject} on={component}`;
      if (!NODE.attributes.some(v => v.name === 'style')) {
        inject += ` style={__STYLE__}`;
      }
      // modifiers.modifiers.forEach(v => {
      //   inject += ` class:${modifiers.className}--${v}={${toModifier(v)}}`;
      // });
      magic.overwrite(v.start, v.end, inject);
    }
    if (v.name === 'style') {
      inject = set_style_from_node(content, v);
      inject = `style={[${inject}, __STYLE__]}`;
      // console.log(styles);
      magic.overwrite(v.start, v.end, inject);
    }
  });

  return magic.toString();
}

function inject_for_touch(modifiers) {
  if (!modifiers.modifiers.some(v => v === 'touch')) return '';
  return `
function __CHECK_TOUCH__(node) {
  touch = false;
  if (!node || !node.parentElement) return;
  if (node.parentElement.classList.contains('mdc-touch-target-wrapper')) {
    touch = true;
  }
}
$: __CHECK_TOUCH__(node);
  `;
}

module.exports = function preprocess_add_modifiers(file) {
  console.log(parse(file));

  const { base, dir } = parse(file);
  const deep = relative(dir, resolve(__dirname, '../..'));

  // console.log(9999, dir, deep);

  let modifiers;
  if (file in CACHE) {
    modifiers = CACHE[file];
  } else {
    modifiers = get_css_modifiers(base);
    CACHE[file] = modifiers;
  }

  console.log(file, modifiers);

  if (!modifiers) throw new Error('ERROR PRE');

  // console.log(modifiers);

  const default_mods = unique([
    'node',
    'disabled',
    'required',
    'group',
    'checked',
    'indeterminate',
    ...modifiers.modifiers
  ]);

  return {
    markup: ({ content }) => {
      content = addScriptTag(content);
      // return;
      const magic = new MagicString(content);
      magic.prependRight(
        scriptIndexStart(content),
        `
import { classes as __CLASSES__ } from '${deep}/mdc';
import { get_current_component } from 'svelte/internal';
const component = get_current_component();

let __CLASS__ = '';
export { __CLASS__ as class };
let __STYLE__ = '';
export { __STYLE__ as style };

/*
// class
  ${modifiers.className}
// classes
[
  ${modifiers.classes.join('\n  ')}
]
// modifiers
[
  ${modifiers.modifiers.join('\n  ')}
]
*/

export let ${default_mods.map(v => toModifier(v)).join(', ')};

${inject_for_touch(modifiers)}
`
      );
      content = magic.toString();
      content = walker(content, modifiers);

      // console.log(content);
      return { code: content };
    }
  };
};
