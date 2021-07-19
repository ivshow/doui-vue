<!--
 * @Author : jaydon
 * @Date   : 2021-07-18 16:52
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <a-layout>
    <a-layout-sider v-model="collapsed">
      <slot name="sider-header" />
      <a-menu mode="inline" theme="dark">
        <a-sub-menu v-for="(menu, i) in sider" :key="i">
          <span slot="title">
            <a-icon :type="menu.icon" />
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="(option, j) in menu.children" :key="`${i}_${j}`">
            {{ option.title }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layout-right">
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changeCollapsed"
          v-if="$d.isUndefined(value)"
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
  props: ['sider', 'value'],
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit('collapse', this.collapsed);
    }
  },
  watch: {
    value(v) {
      this.collapsed = v;
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  overflow-x: hidden;
  height: 100vh;

  .ant-menu {
    .anticon {
      margin-right: 5px;
    }
  }
}

.ant-layout-header {
  background: #fff;
  padding: 0 30px;

  .trigger {
    margin-right: 10px;
  }
}

.layout-right {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .ant-layout-content {
    flex: 1;
    overflow: auto;
    padding: 30px;
  }
}
</style>
