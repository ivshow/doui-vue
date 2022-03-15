<template functional>
  <a-sub-menu :key="props.menu.key" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon :type="props.menu.icon" />
      <span>{{ props.menu.title }}</span>
    </span>
    <template v-for="(subMenu, index) in props.menu.children">
      <!-- 递归 -->
      <sub-menu v-if="subMenu.children" :key="index" :menu="subMenu" />
      <a-menu-item v-else :key="subMenu.path">
        <router-link :to="subMenu.path">
          {{ subMenu.title }}
        </router-link>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
