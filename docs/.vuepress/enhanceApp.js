import AntdView from '@';

export default ({ Vue }) => {
  Vue.use(AntdView, {
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
};
