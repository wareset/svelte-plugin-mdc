var ghpages = require('gh-pages');

ghpages.publish(
  'docs/__sapper__/export/svelte-plugin-mdc', // <-- replace yourproject with your repo name
  {
    branch: 'gh-pages',
    repo: 'https://github.com/wareset/svelte-plugin-mdc.git',
    user: {
      name: 'wareset',
      email: 'git@wareset.com',
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
