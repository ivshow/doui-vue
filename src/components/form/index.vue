<!--
 * @Author : vshow
 * @Date   : 2021-07-21 13:59
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <a-form-model ref="form" v-bind="$allProps">
    <slot />
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$d.forEach(this.$refs.form, (item, key) => {
      if (typeof item === 'function' && !key.startsWith('$')) this[key] = item;
    });
  },
  methods: {
    submit() {
      return new Promise(resolve => this.$refs.form.validate(valid => valid && resolve(this.$attrs.model)));
    }
  }
};
</script>
