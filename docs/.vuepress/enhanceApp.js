import Doui, { Vuex, Router } from '@';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default ({ Vue, options }) => {
  Vue.use(Doui);

  const vuex = new Vuex({
    saveKeys: ['vuex_common'],
    state: {
      vuex_loading: false,
      vuex_common: {
        language: 'zh-CN'
      }
    }
  });

  const router = new Router({
    base: '',
    meta: {},
    components: require.context('./components', false, /\.vue$/),
    lazyLoad: filePath => import(`./components/${filePath}`)
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
