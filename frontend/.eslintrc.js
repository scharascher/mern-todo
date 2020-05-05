module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2020,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    rules:  {
        'react/prop-types': 0,
        'prefer-template': 1
    },
    settings:  {
        react:  {
            version:  'detect',
        },
    },
};
