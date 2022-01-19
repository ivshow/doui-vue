/*
 * @Author : vshow
 * @Date   : 2021-06-19 16:34
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import clickOutside from 'v-click-outside';
import VueClipboard from 'vue-clipboard2';

export default {
  install(Vue) {
    Vue.use(clickOutside).use(VueClipboard);
  }
};
