/*
 * @Author : jaydon
 * @Date   : 2021-06-17 18:25
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

import createVuex from './store';
import directive from './directive';

export let vuex = {};

const install = (Vue, options = {}) => {
  vuex = createVuex(Vue, options.vuex);
  Vue.use(directive);
};

export default { install };
