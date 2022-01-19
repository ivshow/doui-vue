/*
 * @Author : vshow
 * @Date   : 2021-07-08 17:07
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

module.exports = [
  { path: '/', title: '简介' },
  { path: '/quickstart', title: '快速上手' },
  {
    title: '基础组件',
    children: [
      { path: '/base/button', title: 'Button 按钮' },
      { path: '/base/layout', title: 'Layout 布局' },
      { path: '/base/responsive', title: 'Responsive 响应式' }
    ]
  },
  {
    title: '表单组件',
    children: [{ path: '/data/form', title: 'Form 表单' }]
  },
  {
    title: '反馈组件',
    children: [
      { path: '/feedback/modal', title: 'Modal 弹框' },
      { path: '/feedback/drawer', title: 'Drawer 抽屉' }
    ]
  }
];
