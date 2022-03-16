<!--
 * @Author : vshow
 * @Date   : 2021-07-18 16:52
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <a-layout>
    <!-- sideBar -->
    <a-layout-sider v-model="collapsed" :theme="theme">
      <slot name="sider-header" />
      <a-menu
        mode="inline"
        :theme="theme"
        v-model="selectedKeys"
        :openKeys.sync="openKeys"
        v-bind="menuProps"
        v-on="menuListeners"
      >
        <template v-for="(menu, index) in sider">
          <sub-menu v-if="menu.children" :key="index" :menu="menu" v-bind="subMenuProps" v-on="subMenuListeners" />

          <a-menu-item v-else :key="index">
            <span slot="title">
              <a-icon :type="menu.icon" />
              <span class="menu-title">{{ menu.title }}</span>
            </span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>

    <!-- layout right -->
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
        <slot name="body" :breadcrumb="breadcrumb">
          <router-view></router-view>
        </slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SubMenu from './sub-menu';

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
    },
    menuProps: Object,
    menuListeners: Object,
    subMenuProps: Object,
    subMenuListeners: Object
  },
  components: { SubMenu },
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
      breadcrumb: []
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit('collapse', this.collapsed);
    }
  },
  watch: {
    value(v) {
      this.collapsed = v;
    },
    $route: {
      handler({ path: curPath }) {
        const loop = (menu, crumb = [], parentKeys = []) => {
          return menu.some(({ key, title, path, children }) => {
            const breadcrumb = [...crumb, { title, path }];

            if (children) {
              return loop(children, breadcrumb, [...parentKeys, key]);
            }

            if (curPath.includes(path)) {
              this.breadcrumb = breadcrumb;
              this.selectedKeys = [path];
              this.openKeys = parentKeys;
              return true;
            }
          });
        };
        loop(this.sider);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  height: 100vh;

  .ant-menu {
    .anticon {
      margin-right: 5px;
    }
  }
}

.ant-layout-header {
  background: #fff;
  padding: 0 20px;

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
    padding: 20px;
  }
}
</style>
