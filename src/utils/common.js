/*
 * @Author : jaydon
 * @Date   : 2021-06-19 19:21
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

export const parseContext = context => context.keys().reduce((prev, key) => Object.assign(prev, context(key)), {});
