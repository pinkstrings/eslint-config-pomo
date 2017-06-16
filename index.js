module.exports = {
  extends: [
    './rules/base',
    './rules/react',
    './rules/react-a11y'
  ].map(require.resolve),

  plugins: [
    'import'
  ],

  settings: {
    'import/resolver': { node: { extensions: ['.js', '.json'] } },
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ]
  },

  env: {
    es6: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  }
};
