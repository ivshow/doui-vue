/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:04
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

import Vuex, { mapState } from 'vuex';
import _ from 'lodash';
import ls from 'local-storage';

/**
 * @author: jaydon
 * @description:
 * 1.saveKeys: 需要永久存储在state中的变量名
 * 2.initialState: 加上vuex_前缀，是防止变量名冲突，也让人一目了然
 */

export default (Vue, options = {}) => {
  const { saveKeys, initialState } = options;
  const state = _.merge(initialState, ls('saveState'));

  const setState = (state, { key, value }) => {
    const saveKey = key.split('.')[0];

    _.set(state, key, value);

    if (saveKeys?.includes(saveKey)) {
      const saveState = ls('saveState') || {};

      ls('saveState', {
        ...saveState,
        [saveKey]: state[saveKey]
      });
    }
  };

  Vue.use(Vuex);

  const store = new Vuex.Store({
    state,
    mutations: {
      setState
    }
  });

  const update = (key, value) => store.commit('setState', { key, value });

  Vue.mixin({
    created() {
      this.$vuex = update;
    },
    computed: {
      // 将vuex的state中的所有变量，解构到全局混入的mixin中
      ...mapState(Object.keys(state))
    }
  });

  return { state, store, update };
};
