module.exports = {
    root:true,
    env: {
        browser:true,
        amd:true,
        node:true,
        es6:true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        "plugin:react/recommended",
        'plugin:@next/next/recommended',
        'next/core-web-vitals',
    ],
    rules: {
        'semi':['error','always'],
        'prettier/prettier':0,
        "react/no-unescaped-entities": "off",
        "react/no-unknown-property": 0,
    }
}

// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "next",
//     ],
//     "overrides": [
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//         "react/no-unescaped-entities": "off",
//         "react/no-unknown-property": 0
//     }
// }