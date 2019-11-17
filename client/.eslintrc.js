module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'airbnb',
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".jsx", ".tsx"]
          }],

        "@typescript-eslint/no-unused-vars":1,
        "import/no-unresolved": 0
    }
};