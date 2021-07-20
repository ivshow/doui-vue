<!--
 * @Author : jaydon
 * @Date   : 2021-07-18 16:52
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <a-layout>
    <a-layout-sider v-model="collapsed" :theme="theme">
      <slot name="sider-header" />
      <a-menu
        mode="inline"
        :theme="theme"
        :defaultSelectedKeys="defaultSelectedKeys"
        :defaultOpenKeys="defaultOpenKeys"
      >
        <a-sub-menu v-for="(menu, index) in sider" :key="index" @click="handleSubMenu">
          <span slot="title">
            <a-icon :type="menu.icon" />
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="subMenu in menu.children" :key="subMenu.path">
            <router-link :to="subMenu.path">
              {{ subMenu.title }}
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layout-right">
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapsed"
          v-if="$d.isUndefined(value)"
        />
        <slot name="header" />
      </a-layout-header>
      <a-layout-content>
        <slot name="body">
          <router-view></router-view>
        </slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  props: {
    sider: Array,
    value: {
      type: Boolean,
      default: undefined
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {
      collapsed: false,
      defaultSelectedKeys: [],
      defaultOpenKeys: []
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit('collapse', this.collapsed);
    },
    handleSubMenu(params) {
      this.$emit('clickMenuItem', params);
    }
  },
  watch: {
    value(v) {
      this.collapsed = v;
    },
    $route: {
      handler({ path }) {
        this.sider.some(({ title, children }, index) =>
          children.some(subMenu => {
            if (path.includes(subMenu.path)) {
              const breadcrumb = [title, subMenu.title].map(x => ({ breadcrumbName: x }));
              this.$vuex('vuex_breadcrumb', breadcrumb);
              this.defaultSelectedKeys = [subMenu.path];
              this.defaultOpenKeys = [index];
              return true;
            }
          })
        );
      },
      immediate: true
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
    padding: 20px 30px;
  }
}
</style>
