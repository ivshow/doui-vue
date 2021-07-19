/*
 * @Author : jaydon
 * @Date   : 2021-07-18 19:55
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */
import Iframe from './iframe';
import { generateRouters } from '@/plugins';

const routers = generateRouters({
  prefix: '',
  components: require.context('./iframe/', true, /^(?!\.\/index).*\.vue$/),
  lazyLoad: filePath => import(`./iframe/${filePath}`)
});

export default router => {
  router.addRoute({
    path: '/iframe',
    component: Iframe,
    children: routers
  });
};
