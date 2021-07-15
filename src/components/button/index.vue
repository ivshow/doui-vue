<!--
 * @Author : jaydon
 * @Date   : 2021-07-14 18:55
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <a-button type="primary" v-bind="{ ...$attrs, ...$props }" v-on="$listeners">
    <slot />
  </a-button>
</template>

<script>
export default {};
</script>
