module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-bigstair`
  extends: ['bigstair'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
