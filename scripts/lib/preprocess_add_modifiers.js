const svelte = require('svelte/compiler');
const MagicString = require('magic-string');
const get_css_modifiers = require('./get_css_modifiers');
const kebabCase = require('kebab-case');
const unique = require('@wareset/unique');

const CACHE = {};

function walker(content, filename) {}

module.exports = function preprocess_add_modifiers(filename) {
  let modifiers;
  if (filename in CACHE) {
    modifiers = CACHE[filename];
  } else {
    modifiers = get_css_modifiers(filename);
    CACHE[filename] = modifiers;
  }

  if (!modifiers) return {};

  console.log(modifiers);

  const regexp = new RegExp(
    `class\\=[\`'"][^]*?${modifiers.className}[\`'"\\s]`
  );

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
    markup: ({ content, filename }) => {
      const magic = new MagicString(content);

      walker(content, filename);

      let scriptStart = content
        .match(/\<script[^]*?\>/g)
        .filter(v => !v.match(/context/i))[0];
      scriptStart = content.indexOf(scriptStart) + scriptStart.length;

      let e1 = `
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

export let ${default_mods.map(v => kebabCase.reverse(v)).join(', ')};
`;

      magic.prependRight(scriptStart, e1);
      // console.log(e1);

      let e2 = 'on={component} style={__STYLE__} ';
      modifiers.modifiers.forEach(v => {
        e2 += `class:${modifiers.className}--${v}={${kebabCase.reverse(v)}} `;
      });

      const match = content.match(regexp);
      scriptStart = match.index;

      magic.prependRight(scriptStart, e2);
      magic.prependRight(scriptStart + match[0].length - 1, ' {__CLASS__}');
      // console.log(scriptStart);

      const code = magic.toString();

      // console.log(code);
      return { code };
    }
  };
};
