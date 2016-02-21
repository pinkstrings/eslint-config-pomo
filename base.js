module.exports = {
  extends: [
    'eslint-config-pomo/legacy',
    'eslint-config-pomo/rules/es6',
  ].map(require.resolve),
  rules: {}
};
