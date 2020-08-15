const fse = require('fs-extra');
const { relative, resolve, basename, parse } = require('path');
const preprocess = require('svelte-preprocess')();
const pluginNode = require('svelte-plugin-node/preprocess.js')();
const svelte = require('svelte/compiler');

const preprocess_add_modifiers = require('./lib/preprocess_add_modifiers');

const DIR_SRC = resolve(__dirname, '../src');
const DIR_DIST = resolve(__dirname, '../dist');
fse.ensureDirSync(DIR_DIST);

function BUILD_MDC() {
  fse.copySync(resolve(DIR_SRC, 'mdc'), resolve(DIR_DIST, 'mdc'));
}
BUILD_MDC();

const DIR_SRC_CMP = resolve(DIR_SRC, 'components');
const DIR_SRC_CMP_LIB = resolve(DIR_SRC_CMP, 'lib');
const DIR_DIST_CMP = resolve(DIR_DIST, 'components');
fse.emptyDirSync(DIR_DIST_CMP);

async function BUILD_COMPONENT(file) {
  let filename = basename(file);
  console.log([filename]);
  // console.log(filename);

  const content = fse.readFileSync(file, { encoding: 'utf8' });

  const code = (
    await svelte.preprocess(
      content,
      [preprocess, preprocess_add_modifiers(filename), pluginNode],
      {
        file
      }
    )
  ).code.replace(/\<style[^]*?\>/gim, '<style>\n');

  // console.log(code);
  filename = 'MDC' + filename.slice(0, -4);

  const { dir } = parse(file);
  const { name } = parse(filename);
  // console.log(filename, dir, name);

  const DIR = resolve(DIR_DIST_CMP, relative(DIR_SRC_CMP, dir), name);
  // console.log([filename, DIR]);

  fse.emptyDirSync(DIR);
  fse.writeFileSync(resolve(DIR, filename), code);

  const index = `export { default } from "./${filename}";`;
  fse.writeFileSync(resolve(DIR, 'index.js'), index);
}

// Build components
fse
  .readdirSync(DIR_SRC_CMP)
  .filter(v => ~v.indexOf('.svelte'))
  .forEach(cmp => BUILD_COMPONENT(resolve(DIR_SRC_CMP, cmp)));

fse
  .readdirSync(DIR_SRC_CMP_LIB)
  .filter(v => ~v.indexOf('.svelte'))
  .forEach(cmp => BUILD_COMPONENT(resolve(DIR_SRC_CMP_LIB, cmp)));

module.exports = { DIR_SRC, DIR_DIST, BUILD_MDC, BUILD_COMPONENT };
