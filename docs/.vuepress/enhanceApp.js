import Doui, { Vuex, Router } from '@';
import addRouter from './router';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default ({ Vue, options, router }) => {
  Vue.use(Doui);

  addRouter(router);

  const vuex = new Vuex({
    saveKeys: ['vuex_common'],
    state: {
      vuex_loading: false,
      vuex_common: {
        language: 'zh-CN'
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

  window.addEventListener('load', console.clear);
};
