module.exports = {
  extends: [
    'eslint-config-pomo/base',
    'eslint-config-pomo/rules/strict',
    'eslint-config-pomo/rules/react',
  ].map(require.resolve),
  rules: {}
};
