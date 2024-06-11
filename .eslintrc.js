module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },

        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:storybook/recommended',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
    plugins: ['react'],
    rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'prettier/prettier': ['error', {}, {usePrettierrc: true}],
        'react/react-in-jsx-scope': 'off',

        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'simple-import-sort/imports': 'error',

        'no-unexpected-multiline': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'linebreak-style': ['error', 'unix'],
        'no-plusplus': 0,

        'import/extensions': 0,
        'import/no-named-as-default': 0,

        'react/forbid-prop-types': 0,
        indent: ['error', 4],
        'react/jsx-indent': [1, 4],
        '@typescript-eslint/indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'react/jsx-props-no-spreading': 0,
        'no-console': 0,
        'react-hooks/exhaustive-deps': 0, // airbnb overrides
        'react/jsx-filename-extension': 0,
        'jsx-a11y/label-has-associated-control': 0,

        'react/function-component-definition': 0,
        'import/no-extraneous-dependencies': 0,
        'object-curly-spacing': ['error', 'never'],
    },
};
