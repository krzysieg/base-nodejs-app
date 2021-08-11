module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'object-curly-spacing': [
            'off'
        ],
        '@typescript-eslint/no-var-requires': [
            'off'
        ],
        '@typescript-eslint/array-type': [
            'error'
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        semi: [
            'error',
            'always'
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {allowTemplateLiterals: true}
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-namespace': 'off',
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'FunctionDeclaration': {
                    'parameters': 'first'
                },
                'FunctionExpression': {
                    'parameters': 'first'
                }
            }
        ],
        'quote-props': [
            'error',
            'as-needed'
        ]
    }
}