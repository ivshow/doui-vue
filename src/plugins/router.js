/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import VueRouter from 'vue-router';
import _ from 'lodash';

// 解决重复跳转路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export const generateRouters = ({ components = [], meta: defaultMeta, lazyLoad, prefix = '/' }) =>
  components.keys().map(key => {
    const { name, meta } = components(key).default;
    const { path: alias, ...rest } = _.merge({}, defaultMeta, meta);
    const fileName = key.replace(/\.\//g, '');
    const path = _.kebabCase(fileName.replace(/(index)?\.vue/gi, ''));

    return {
      alias,
      meta: rest,
      name: name || path,
      path: prefix + path,
      component: () => lazyLoad(fileName)
    };
  });

export let router = {};

export function Router(params) {
  if (!params) return;

  const { components, meta, lazyLoad, ...rest } = params;
  const routes = generateRouters({ components, meta, lazyLoad });

  router = new VueRouter({
    routes: routes.concat({ path: '*', redirect: '/' }),
    ...rest
  });

  return router;
}

export default {
  install(Vue) {
    Vue.use(VueRouter);
  }
};
