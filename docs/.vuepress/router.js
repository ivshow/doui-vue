/*
 * @Author : jaydon
 * @Date   : 2021-07-18 19:55
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */
import Iframe from './iframe';

/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import { generateRouters } from '@/plugins';

const routers = generateRouters({
  prefix: '',
  components: require.context('./iframe/', false, /^(?!\.\/index).*\.vue$/),
  lazyLoad: filePath => import(`./iframe/${filePath}`)
});

export default router => {
  router.addRoutes([
    {
      path: '/iframe',
      component: Iframe,
      children: routers
    }
  ]);
};
