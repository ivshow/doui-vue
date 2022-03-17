import Doui, { Vuex } from 'doui-vue';
import addRouter from './router';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default ({ Vue, options, router, isServer }) => {
  Vue.use(Doui);

  addRouter(router);

  const vuex = new Vuex({
    saveKeys: ['vuex_common'],
    state: {
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

  !isServer &&
    window.addEventListener('load', () => {
      const container = document.querySelector('.theme-container');
      container && (container.style.display = 'unset');
    });
};
