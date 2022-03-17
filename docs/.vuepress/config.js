const path = require('path');

module.exports = {
  theme: 'antdocs',
  title: 'doui',
  description: 'Common collection based on Vue2 and Ant Design Vue package',
  base: '',
  host: 'localhost',
  port: 1024,
  head: [['link', { rel: 'icon', href: '/assets/logo.png' }]],
  markdown: {
    lineNumbers: false
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    sidebarDepth: 0,
    smoothScroll: true,
    backToTop: false,
    nav: [{ text: '主页', link: 'http://dooomi.com' }],
    sidebar: require('./sidebar'),
    repo: 'ivshow/doui.git'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../src'),
        'doui-vue': path.join(__dirname, '../../src')
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
  plugins: [
    'demo-container',
    'smooth-scroll',
    '@vuepress/back-to-top',
    [
      '@vuepress/register-components',
      {
        componentsDir: path.join(__dirname, 'components'),
        getComponentName: file => 'demo-' + file.replace(/\/|\\/g, '-').toLowerCase()
      }
    ]
  ],
  extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/router.js']
};
