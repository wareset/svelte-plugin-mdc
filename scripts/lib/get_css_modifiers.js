const { resolve, parse } = require('path');

const unique = require('@wareset/unique');
const kebabCase = require('kebab-case');

const css = require('css');
const sass = require('sass');
const fiber = require('fibers');

// let i = 0;
module.exports = function get_css_modifiers(filename) {
  // i++;
  // if (i !== 1) return undefined;

  const name = kebabCase(parse(filename).name).slice(1);

  let pathname = name;
  let pathfile = name;

  let className = `mdc-${name}`;

  if (!pathname.indexOf('chip')) {
    pathfile = pathname = 'chips';
  } else if (!pathname.indexOf('list')) {
    pathfile = pathname = 'list';
  } else if (pathname === 'touch') {
    pathfile = pathname = 'touch-target';
    className = 'mdc-touch-target-wrapper';
  } else if (pathname === 'text-field') pathname = 'textfield';

  let path;
  try {
    path = resolve(require.resolve(`@material/${pathname}/package.json`), '..');
  } catch (err) {
    console.error(['parsecss: ERROR', name, pathname]);
    return { className, classes: [], modifiers: [] };
    // return undefined;
  }

  const file = resolve(path, `mdc-${pathfile}.scss`);
  const code = sass
    .renderSync({ includePaths: [resolve(path, '../..')], file, fiber })
    .css.toString();
  const rules = css.parse(code).stylesheet.rules;

  let classes = [];
  rules.forEach(({ selectors }) => {
    if (!selectors) return;
    classes = classes.concat(...[...selectors].map(v => v.split(/[\s.]+/g)));
  });
  classes = unique(
    classes.filter(v => !v.indexOf(className)).map(v => v.split(/[^\w-]/g)[0])
  );

  // console.log(classes);

  const modifiers = classes
    .map(v => {
      if (~v.indexOf(`${className}--`)) return v.slice(className.length + 2);
      return '';
    })
    .filter(unique);

  // console.log(modifiers);

  return { className, classes, modifiers };
};
