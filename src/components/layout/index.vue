<!--
 * @Author : jaydon
 * @Date   : 2021-07-18 16:52
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <a-layout>
    <a-layout-sider v-model="collapsed" :trigger="null">
      <slot name="sider-header" />
      <a-menu mode="inline" theme="dark">
        <a-sub-menu v-for="(menu, i) in sider" :key="i">
          <span slot="title"><a-icon :type="menu.icon" v-if="menu.icon" />{{ menu.title }}</span>
          <a-menu-item v-for="(option, j) in menu.children" :key="`${i}_${j}`">{{ option.title }}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layout-right">
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <slot name="header" />
      </a-layout-header>
      <a-layout-content>
        <slot name="body" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  props: ['sider'],
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  overflow-x: hidden;
  height: 100vh;
}

.ant-layout-header {
  background: none;
}

.layout-right {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .ant-layout-content {
    flex: 1;
    overflow: auto;
  }
}
</style>
