/*
 * @Author : jaydon
 * @Date   : 2021-06-17 18:25
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import router from './router';
import vuex from './vuex';
import directive from './directive';
import mixin from './mixin';

const install = Vue => {
  Vue.use(directive).use(mixin).use(vuex).use(router);
};

export * from './router';
export * from './vuex';
export default { install };
