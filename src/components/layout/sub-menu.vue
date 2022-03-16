<template functional>
  <a-sub-menu v-bind="props" v-on="listeners" :key="props.menu.key">
    <span slot="title">
      <a-icon :type="props.menu.icon" />
      <span class="menu-title">{{ props.menu.title }}</span>
    </span>
    <template v-for="(subMenu, index) in props.menu.children">
      <!-- 递归 -->
      <sub-menu v-if="subMenu.children" v-bind="props" v-on="listeners" :key="index" :menu="subMenu" />
      <a-menu-item v-else :key="subMenu.path">
        <router-link :to="subMenu.path">
          {{ subMenu.title }}
        </router-link>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
