<!--
 * @Author : vshow
 * @Date   : 2021-07-18 20:02
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <d-layout v-model="collapsed" :sider="sider">
    <template #sider-header>
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
    </template>
    <template #header>layout-header</template>
    <template #body>
      <a-breadcrumb :routes="vuex_breadcrumb">
        <template #itemRender="{ route }">
          {{ route.breadcrumbName }}
        </template>
      </a-breadcrumb>
      <router-view></router-view>
    </template>
  </d-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
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
.trigger {
  width: 100%;
  padding: 20px;
  color: #fff;
}
</style>
