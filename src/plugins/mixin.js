/*
 * @Author : jaydon
 * @Date   : 2021-07-17 11:18
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

const install = Vue => {
  Vue.mixin({
    created() {
      this.$allProps = { ...this.$attrs, ...this.$props };
    }
  });
};

export default { install };
