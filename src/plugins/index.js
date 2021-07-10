/*
 * @Author : jaydon
 * @Date   : 2021-06-17 18:25
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

import creatVuex from './store';
import directive from './directive';

export let vuex = {};

const install = (Vue, options = {}) => {
  vuex = creatVuex(Vue, options.vuex);
  Vue.use(directive);
};

export default { install };
