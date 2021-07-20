<!--
 * @Author : jaydon
 * @Date   : 2021-07-18 20:02
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <d-layout :sider="sider">
    <template #sider-header>
      <div class="logo" />
    </template>
    <template #header>layout-header</template>
    <template #body></template>
  </d-layout>
</template>

<script>
export default {
  data() {
    return {
      sider: [
        {
          title: 'subnav 1',
          icon: 'user',
          children: [
            {
              title: 'option1',
              path: '/iframe/layout-trigger/example-1'
            },
            {
              title: 'option2',
              path: '/iframe/layout-trigger/example-2'
            }
          ]
        },
        {
          title: 'subnav 2',
          icon: 'team',
          children: [
            {
              title: 'option1',
              path: '/iframe/layout-trigger/example-3'
            },
            {
              title: 'option2',
              path: '/iframe/layout-trigger/example-4'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: #d8d8d8;
  margin: 16px;
}
</style>
