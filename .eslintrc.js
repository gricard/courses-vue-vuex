module.exports = {
  root: true,
  parser: 'babel-eslint',
  "extends": [
    "eslint:recommended",
//    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "html"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false
    }
  },
//  "settings": {
//    "import/resolver": "webpack"
//  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0, // allow async-await
    'generator-star-spacing': 0, // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //    "no-debugger": 1,
    "quotes": 0,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-var": 1,
//    "semi": [1, "always"],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0
  }
};
