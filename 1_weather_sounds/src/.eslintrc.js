module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'eslint:recommended',
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'no-useless-return': 'off',
        'no-promise-executor-return': 'off',
        'import/no-unresolved': 'off',
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        'no-bitwise': 'off',
        'no-constant-condition': 'off',
        'no-prototype-builtins': 'off',
        'linebreak-style': 'off'
    }
};
