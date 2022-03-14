/**
 * @Author : vshow
 * @Date   : 2021-10-23 18:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import _ from 'lodash';
import { vuex } from '@/plugins';
import breakpoint from '@/styles/mixin.scss';

export const device = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
  'no-mobile': 'no-mobile',
  'no-desktop': 'no-desktop'
};

const { breakpoint_sm, breakpoint_md } = breakpoint;

export const getDeviceType = () => {
  const types = [];

  if (globalThis.innerWidth < breakpoint_md) {
    types.push(device['no-desktop']);
  }

  if (globalThis.innerWidth >= breakpoint_sm) {
    types.push(device['no-mobile']);
  }

  if (globalThis.innerWidth < breakpoint_sm) {
    return types.concat(device.mobile);
  }

  if (globalThis.innerWidth >= breakpoint_md) {
    return types.concat(device.desktop);
  }

  return types.concat(device.tablet);
};

export const deviceTypeMixin = type => ({
  render() {
    return this.vuex_deviceType.includes(device[type]) && <div class={type}>{this.$slots.default}</div>;
  }
});

const setDeviceType = () => vuex.update('vuex_deviceType', getDeviceType());
globalThis.addEventListener?.('resize', _.throttle(setDeviceType, 300));
