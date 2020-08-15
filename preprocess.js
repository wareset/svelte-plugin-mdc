const sveltePluginNodePreprocess = require('svelte-plugin-node/preprocess');

module.exports = function preprocess(options = {}) {
  const spnp = sveltePluginNodePreprocess(options);

  return spnp;
};
