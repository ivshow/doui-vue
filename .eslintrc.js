module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    arguments: 'readonly'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {}
};
