module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app', // Includes TypeScript support already
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Updated for better compatibility
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn', // Replaced deprecated rule
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-unresolved': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-mutable-exports': 'error',
    'import/export': 'error',
    'import/no-commonjs': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    eqeqeq: 'error',
    'no-param-reassign': 'error',
    'dot-notation': 'error',
  },
};
