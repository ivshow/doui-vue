/*
 * @Author : vshow
 * @Date   : 2021-07-18 19:55
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */
import Iframe from './iframe';

const exampleRouters = [];

export const generateRouters = ({ components = [], meta: defaultMeta, lazyLoad }) =>
  components
    .keys()
    .map(key => {
      const { name, meta } = components(key).default;
      const { path: alias, ...rest } = _.merge({}, defaultMeta, meta);
      const fileName = key.replace(/\.\//g, '');
      const path = _.kebabCase(fileName.replace(/(index)?\.vue/gi, ''));
      const router = {
        alias,
        meta: rest,
        path,
        component: () => lazyLoad(fileName)
      };

      if (path.includes('example')) {
        exampleRouters.push(router);
        return;
      }

      return router;
    })
    .filter(x => x);

const routers = generateRouters({
  components: require.context('./iframe/', true, /^(?!\.\/index).*\.vue$/),
  lazyLoad: filePath => import(`./iframe/${filePath}`)
});

routers.forEach(x => {
  x.redirect = `${x.path}/${exampleRouters[0].path}`;
  x.children = exampleRouters;
});

export default router => {
  router.addRoute({
    path: '/iframe',
    component: Iframe,
    children: routers
  });
};
