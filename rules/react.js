module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: { ecmaFeatures: { jsx: true } },
  ecmaFeatures: { jsx: true },

  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    'react/display-name': [2, { ignoreTranspilerName: false }],
    'react/forbid-component-props': [2, { forbid: ['className', 'style'] }],
    'react/forbid-prop-types': [2, { forbid: ['any', 'array', 'object'] }],
    'react/forbid-foreign-prop-types': 2,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 0,
    'react/no-danger': 0,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': [2],
    'react/no-did-update-set-state': [2],
    'react/no-direct-mutation-state': 0,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': 2,
    'react/prop-types': [2, {
      ignore: [], customValidators: []
    }],
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-optimization': [0, { allowDecorators: [] }],
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/sort-prop-types': [2, {
      ignoreCase: false, callbacksLast: false, requiredFirst: false
    }],
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,

    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': [0, {
      eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, {
      when: 'multiline', maximum: 1
    }],
    'react/jsx-no-bind': [2, {
      ignoreRefs: true, allowArrowFunctions: true, allowBind: false
    }],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
    'react/jsx-no-literals': 1,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': [2, {
      allowAllCaps: true, ignore: []
    }],
    'react/jsx-sort-props': [1, {
      callbacksLast: false,
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false
    }],
    'react/jsx-tag-spacing': [2, {
      afterOpening: 'never', beforeSelfClosing: 'always', closingSlash: 'never'
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2
  },

  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.json'] } },
    react: {
      pragma: 'React',
      version: '15.4'
    }
  }
}
