module.exports = {
  extends: [
    'eslint-config-pomo/rules/best-practices',
    'eslint-config-pomo/rules/errors',
    'eslint-config-pomo/rules/legacy',
    'eslint-config-pomo/rules/node',
    'eslint-config-pomo/rules/style',
    'eslint-config-pomo/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
