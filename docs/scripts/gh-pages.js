var ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export/svelte-use-material', // <-- replace yourproject with your repo name
  {
    branch: 'gh-pages',
    repo: 'https://github.com/wareset/svelte-use-material.git',
    user: {
      name: 'wareset',
      email: 'git@wareset.com',
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
