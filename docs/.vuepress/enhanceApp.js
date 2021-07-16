import Doui, { vuex } from '@';
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
    created() {
      this.$d.merge(this.$store, vuex.store);
    },
    provide: () => ({
      localeData: {
        antLocale: zhCN
      }
    })
  });
};
