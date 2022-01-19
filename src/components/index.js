/*
 * @Author : vshow
 * @Date   : 2021-06-17 19:39
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import _ from 'lodash';
import { openModal, openDrawer } from './modal';
import { addPrototype } from '@/utils';

const defaultProps = {
  inheritAttrs: false
};

// 注册全局组件
const components = require.context('./', true, /index\.(vue|js)$/);

const install = Vue => {
  addPrototype('openModal', openModal);
  addPrototype('openDrawer', openDrawer);

  components.keys().forEach(key =>
    _.forEach(components(key), (component, k) => {
      if (!(component.render || _.filter(component.mixins, 'render').length)) return;

      const name = k === 'default' ? component.name || key.replace(/\.\/|index\.(vue|js)/g, '') : k;
      Vue.component(`d-${_.kebabCase(name)}`, _.merge({}, defaultProps, component));
    })
  );
};

export * from './modal';
export default { install };
