<template functional>
  <a-sub-menu v-bind="props" v-on="listeners" :key="props.menu.key">
    <span slot="title">
      <a-icon v-if="props.menu.icon" :type="props.menu.icon" />
      <span class="menu-title">{{ props.menu.title }}</span>
    </span>
    <template v-for="subMenu in props.menu.children">
      <!-- 递归 -->
      <sub-menu
        v-if="subMenu.children && subMenu.children.length"
        v-bind="props"
        v-on="listeners"
        :key="subMenu.key"
        :menu="subMenu"
      />
      <a-menu-item v-else :key="subMenu.key">
        <router-link :to="subMenu.path">
          {{ subMenu.title }}
        </router-link>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
