/*
 * @Author : vshow
 * @Date   : 2020-09-26 12:04
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { Vue } from '@';
import BasicVuex, { mapState } from 'vuex';
import _ from 'lodash';
import ls from 'local-storage';
import { getDeviceType } from '@/components/responsive/utils';

/**
 * 1.saveKeys: 需要永久存储在state中的变量名
 * 2.state: 加上vuex_前缀，是防止变量名冲突，也让人一目了然
 */

export let vuex = {};

const defaultState = {
  vuex_breadcrumb: [],
  vuex_deviceType: getDeviceType()
};

export function Vuex({ saveKeys, state: initialState } = {}) {
  const state = _.merge(defaultState, initialState, ls('vuex_save_state'));

  const setState = (state, { key, value }) => {
    const saveKey = key.split('.')[0];

    _.set(state, key, value);

    if (saveKeys?.includes(saveKey)) {
      const vuex_save_state = ls('vuex_save_state') || {};

      ls('vuex_save_state', {
        ...vuex_save_state,
        [saveKey]: state[saveKey]
      });
    }
  };

  const store = new BasicVuex.Store({
    state,
    mutations: {
      setState
    }
  });

  const update = (key, value) => store.commit('setState', { key, value });

  Vue.mixin({
    beforeCreate() {
      this.$vuex = update;
    },
    computed: {
      // 将vuex的state中的所有变量，解构到全局混入的mixin中
      ...mapState(Object.keys(state))
    }
  });

  vuex = { store, update };

  return vuex;
}

export default {
  install(Vue) {
    Vue.use(BasicVuex);
  }
};
