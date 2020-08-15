const fse = require('fs-extra');
const { relative, resolve, parse } = require('path');
const chokidar = require('chokidar');

const { DIR_SRC, DIR_DIST, BUILD_COMPONENT } = require('./build.js');

chokidar.watch([resolve(DIR_SRC, 'mdc')]).on('change', (path /*, stats*/) => {
  console.log(path);
  fse.copySync(path, resolve(DIR_DIST, relative(DIR_SRC, path)));
});

chokidar.watch([resolve(DIR_SRC, 'components')]).on('change', (path) => {
  // console.log(path, stats);
  if (parse(path).ext === '.svelte-vue') BUILD_COMPONENT(path);
});
