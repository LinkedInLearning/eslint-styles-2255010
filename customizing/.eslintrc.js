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
        'brace-style': 'warn',
        'no-unused-vars': 'off',
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'comma-spacing': [
            "error", {
                "before": false,
                "after": true
            }
        ]
    },
};
