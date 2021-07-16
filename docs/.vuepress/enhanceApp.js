import Doui from '@';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default ({ Vue, options }) => {
  Vue.use(Doui);

  Vue.mixin({
    provide: () => ({
      localeData: {
        antLocale: zhCN
      }
    })
  });
};
