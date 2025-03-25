module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
    settings: {
        react: { version: 'detect' } // automatycznie wykrywa wersję React
    },
    rules: {
        // Wyłączanie konieczności importu React w .jsx / .tsx
        'react/react-in-jsx-scope': 'off'
        // Dodaj więcej reguł według potrzeb
    }
};
