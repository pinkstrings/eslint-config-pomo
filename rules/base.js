module.exports = {
  rules: {
    'accessor-pairs': 0,
    'array-bracket-spacing': [2, 'never'],
    'array-callback-return': 2,
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': 0,
    'arrow-spacing': [2, {
      before: true, after: true
    }],
    'block-scoped-var': 2,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'callback-return': 0,
    'global-require': 2,
    'camelcase': [2, { properties: 'never' }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      before: false, after: true
    }],
    'comma-style': [2, 'last'],
    'complexity': [0, 11],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 2,
    'consistent-this': 0,
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'default-case': [2, { commentPattern: '^no default$' }],
    'dot-location': [2, 'property'],
    'dot-notation': [2, { allowKeywords: true }],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'func-names': 1,
    'func-style': 0,
    'generator-star-spacing': 0,
    'guard-for-in': 2,
    'handle-callback-err': 0,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'import/default': 0,
    'import/export': 2,
    'import/extensions': [0, 'never'],
    'import/imports-first': [2, 'absolute-first'],
    'import/max-dependencies': [0, { max: 10 }],
    'import/named': 0,
    'import/namespace': 0,
    'import/newline-after-import': 2,
    'import/no-absolute-path': [0],
    'import/no-amd': 2,
    'import/no-commonjs': 0,
    'import/no-deprecated': 0,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: false, optionalDependencies: false
    }],
    'import/no-mutable-exports': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-as-default': 2,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/no-restricted-paths': 0,
    'import/no-unresolved': [2, { commonjs: true }],
    'import/order': [0, {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'never'
    }],
    'import/prefer-default-export': 2,
    'indent': [2, 2, {
      SwitchCase: 1, VariableDeclarator: 1
    }],
    'init-declarations': 0,
    'key-spacing': [2, {
      beforeColon: false, afterColon: true
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true }, throw: { after: true }, case: { after: true }
      }
    }],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': 0,
    'max-depth': [0, 4],
    'max-len': [2, 120, 2, {
      ignoreUrls: true, ignoreComments: false
    }],
    'max-lines': [0, {
      max: 300, skipBlankLines: true, skipComments: true
    }],
    'max-nested-callbacks': 0,
    'max-params': [0, 3],
    'max-statements-per-line': [0, { max: 1 }],
    'max-statements': [0, 10],
    'multiline-ternary': 0,
    'new-cap': [2, { newIsCap: true }],
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-alert': 1,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-catch-shadow': 0,
    'no-class-assign': 2,
    'no-cond-assign': [2, 'always'],
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-console': 1,
    'no-const-assign': 2,
    'no-constant-condition': 1,
    'no-continue': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 0,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-empty-character-class': 2,
    'no-empty-function': [2, { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-empty-pattern': 2,
    'no-empty': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': [0, 'all', {
      conditionalAssign: true, nestedBinaryExpressions: false, returnAssign: false
    }],
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': [0, {
      boolean: false, number: true, string: true, allow: []
    }],
    'no-implicit-globals': 0,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 0,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      allowLoop: false, allowSwitch: false
    }],
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [0, {
      ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false
    }],
    'no-mixed-operators': [2, {
      groups: [['+', '-', '*', '/', '%', '**'], ['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']], allowSamePrecedence: false
    }],
    'no-mixed-requires': [0, false],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      max: 2, maxEOF: 1
    }],
    'no-native-reassign': 2,
    'no-negated-condition': 0,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': [2, { props: true }],
    'no-path-concat': 2,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-globals': 0,
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,
    'no-restricted-syntax': [2, 'DebuggerStatement', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-tabs': 0,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-underscore-dangle': [2, { allowAfterThis: false }],
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 0,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-expressions': [2, {
      allowShortCircuit: false, allowTernary: false
    }],
    'no-unused-labels': 2,
    'no-unused-vars': [2, {
      vars: 'local', args: 'none'
    }],
    'no-use-before-define': 2,
    'no-useless-call': 0,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': [2, {
      ignoreDestructuring: false, ignoreImport: false, ignoreExport: false
    }],
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': [0, {
      terms: ['todo', 'fixme', 'xxx'], location: 'start'
    }],
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'object-curly-newline': [2, {
      minProperties: 2, multiline: true
    }],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    'object-shorthand': [2, 'always', {
      ignoreConstructors: false, avoidQuotes: true
    }],
    'one-var-declaration-per-line': [2, 'always'],
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': 0,
    'padded-blocks': [2, 'never'],
    'prefer-arrow-callback': [2, {
      allowNamedFunctions: false, allowUnboundThis: true
    }],
    'prefer-const': [2, {
      destructuring: 'any', ignoreReadBeforeAssign: true
    }],
    'prefer-reflect': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quote-props': [2, 'as-needed', {
      keywords: false, unnecessary: true, numbers: false
    }],
    'quotes': [2, 'single', { avoidEscape: true }],
    'radix': 2,
    'require-jsdoc': 0,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'semi-spacing': [2, {
      before: false, after: true
    }],
    'semi': [2, 'never'],
    'sort-imports': [0, {
      ignoreCase: false, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      anonymous: 'always', named: 'never'
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      words: true, nonwords: false, overrides: {}
    }],
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'], markers: ['=', '!']
    }],
    'strict': [2, 'never'],
    'template-curly-spacing': 2,
    'unicode-bom': [2, 'never'],
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'outside'],
    'wrap-regex': 0,
    'yield-star-spacing': [2, 'after'],
    'yoda': 2
  }
}
