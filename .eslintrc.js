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
        'plugin:prettier/recommended',
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
            rules: {
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'semi',
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false,
                        },
                    },
                ],
            },
        },
    ],
    plugins: ['simple-import-sort', 'react'],
    rules: {
        'eslintprettier/prettier': 'off',
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
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
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
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'multiline-ternary': 0,
    },
};
