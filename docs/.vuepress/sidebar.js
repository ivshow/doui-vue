/*
 * @Author : jaydon
 * @Date   : 2021-07-08 17:07
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */
 
module.exports = [
  { path: '/', title: '简介' },
  { path: '/components/font', title: '字体' },
  { path: '/components/theme', title: '主题'},
  {
    title: '组件',
    children: [{ path: '/components/container', title: 'Container 容器' }],
  },
  // {
  //   path: '/utils',
  //   title: '工具方法',
  //   children: [],
  // },
]