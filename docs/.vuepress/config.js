const path = require('path');

module.exports = {
  theme: 'antdocs',
  title: 'doui',
  description: 'Common collection based on Vue2 and Ant Design Vue package',
  base: '/',
  head: [['link', { rel: 'icon', href: '/assets/logo.png' }]],
  markdown: {
    lineNumbers: false
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  backToTop: true,
  themeConfig: {
    smoothScroll: true,
    // nav: require("./config/nav"),
    sidebar: require('./sidebar'),
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/ivshow/doui.git',
    editLinks: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../src')
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap(options =>
        Object.assign(options, {
          plugins: ['@babel/plugin-transform-modules-commonjs']
        })
      );
  },
  plugins: ['demo-container', 'clean-urls']
};
