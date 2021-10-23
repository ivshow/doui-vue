/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import Components from './components';
import plugins from './plugins';
import utils from './utils';
import Antd from 'ant-design-vue';
import './styles/index.scss';

let Vue;

const install = (vue, options) => {
  vue.config.productionTip = false;
  Vue = vue;

  vue.use(Antd).use(Components).use(utils).use(plugins, options);
};

export { Vue };
export * from './components';
export * from './plugins';
export * from './utils';
export default { install };
