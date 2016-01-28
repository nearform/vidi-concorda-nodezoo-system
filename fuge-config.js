'use strict'

module.exports = {
  proxy: 'docker',
  runDocker: true,
  tail: false,
  restartOnError: true,
  exclude: [
    '**/node_modules',
    '**/data',
    '**/.git',
    '**/CURRENT',
    '**/LOG*',
    '**/MANIFEST*',
    '**/*.ldb',
    '**/*.log'
  ],
  overrides: {
    msgstats: {
      build: 'cd system && npm install',
      run: 'node ./system/msgstats.js'
    },
    mesh: {
      build: 'cd system && npm install',
      run: 'node ./system/base-node.js'
    },
    github: {
      build: 'npm install'
    },
    info: {
      build: 'npm install'
    },
    search: {
      build: 'npm install'
    },
    web: {
      build: 'npm install && npm run build'
    },
    concorda: {
      build: 'npm install && npm run build'
    },
    vidi: {
      build: 'npm install && npm run build'
    }
  }
};
