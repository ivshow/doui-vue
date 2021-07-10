/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

import Components from './components';
import plugins, { vuex } from './plugins';
import utils from './utils';
import Antd from 'ant-design-vue';
import './styles/index.scss';
import 'ant-design-vue/dist/antd.css';

const install = (Vue, options) => {
  Vue.use(Antd).use(Components).use(utils).use(plugins, options);
};

export { vuex };

export default { install };
