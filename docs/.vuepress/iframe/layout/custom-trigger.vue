<!--
 * @Author : jaydon
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
          title: 'subnav 1',
          icon: 'user',
          children: [
            {
              title: 'option1',
              path: 'example-1'
            },
            {
              title: 'option2',
              path: 'example-2'
            }
          ]
        },
        {
          title: 'subnav 2',
          icon: 'team',
          children: [
            {
              title: 'option1',
              path: 'example-3'
            },
            {
              title: 'option2',
              path: 'example-4'
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
