/*
 * @Author : jaydon
 * @Date   : 2021-06-19 19:21
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { Vue, vuex } from '@';

export const parseContext = context => context.keys().reduce((prev, key) => Object.assign(prev, context(key)), {});

export const addPrototype = (key, value) => (Vue.prototype['$' + key] = value);

export const renderComponent = props => {
  const vm = new Vue({
    store: vuex.store,
    ...props
  }).$mount();

  document.body.appendChild(vm.$el);

  vm.destroy = () => vm.$children[0].$destroy();

  return vm;
};
