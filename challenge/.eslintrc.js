module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'comma-dangle': [
      'error',
      'always',
    ],
    'array-bracket-newline': 'error',
    'yoda': 'error',
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 3,
      },
    ],
  },
};
