module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    arguments: 'readonly',
    globalThis: 'readonly'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {}
};
