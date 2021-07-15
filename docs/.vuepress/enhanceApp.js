import Doui from '@';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default ({ Vue, options }) => {
  Vue.use(Doui, {
    vuex: {
      saveKeys: ['vuex_common'],
      initialState: {
        vuex_loading: false,
        vuex_common: {
          language: 'zh-CN'
        }
      }
    }
  });

  Vue.mixin({
    provide: function () {
      return {
        localeData: {
          antLocale: {
            ...zhCN,
            exist: true
          }
        }
      };
    }
  });
};
