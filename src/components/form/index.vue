<template>
  <a-form-model ref="form" v-bind="{ ...$attrs, ...$props }">
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
