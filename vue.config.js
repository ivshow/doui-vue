/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

const path = require('path');

module.exports = {
  publicPath: '',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/mixin.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@images': '@/assets/images',
        '@locales': '@/assets/locales'
      }
    }
  }
};
