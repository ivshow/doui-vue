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
      <div>custom-trigger</div>
    </template>
  </d-layout>
</template>

<script>
const children = [
  {
    title: 'option1 '
  },
  {
    title: 'option2 '
  },
  {
    title: 'option3 '
  }
];

export default {
  data() {
    return {
      collapsed: false,
      sider: [
        {
          title: 'subnav 1',
          icon: 'user',
          children
        },
        {
          title: 'subnav 2',
          icon: 'team',
          children
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
