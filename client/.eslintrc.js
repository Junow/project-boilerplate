module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parser:  '@typescript-eslint/parser',
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-console':'warn',
      'no-unused-vars':'warn',
      'no-use-before-define':'warn',
      'semi': [ 'error', 'always' ],
      'quotes':['error', 'single'],
      'space-before-blocks':['error', 'always']
    }
};