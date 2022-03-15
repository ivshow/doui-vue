<!--
 * @Author : vshow
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
    <template #body>
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, index) in vuex_breadcrumb" :key="index">{{ item.title }}</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
  </d-layout>
</template>

<script>
export default {
  data() {
    return {
      sider: [
        {
          key: '1',
          title: 'subnav 1',
          icon: 'user',
          children: [
            {
              key: '1.1',
              title: 'option1',
              icon: 'user',
              path: '/iframe/layout-trigger/example-1'
            },
            {
              key: '1.2',
              icon: 'user',
              title: 'option2',
              path: '/iframe/layout-trigger/example-2'
            }
          ]
        },
        {
          key: '2',
          title: 'subnav 2',
          icon: 'team',
          children: [
            {
              key: '2.1',
              icon: 'team',
              title: 'option1',
              path: '/iframe/layout-trigger/example-21'
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
