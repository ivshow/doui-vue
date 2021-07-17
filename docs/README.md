---
home: false
pageClass: index
footer: MIT Licensed | Copyright © 2021 Written by jaydon
---

# 简介

<div class="logos">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <span class="sign">+</span>
  <img src="https://cn.vuejs.org/images/logo.png" />
  <span class="sign">=</span>
  <img class="logo" src="http://f.dooomi.com/image/do.png" />
</div>

> 基于 Vue2 和 [Ant Design Vue](https://antdv.com) 二次封装常用的业务组件、工具类集合。

## 特性

- 常用业务组件
- 内置 css 样式
- 常用的工具方法
- 自定义指令
- vuex
- vue-router
- css in js

## 安装

```bash
yarn add doui-vue
# OR
npm install doui-vue --save
```

## 使用

```js
import Vue from 'vue';
import App from './App';
import Doui, { Vuex, Router } from 'doui-vue';
import 'doui-vue/dist/doui-vue.css';

Vue.use(Doui);

const { store } = new Vuex();

const router = new Router({
  components: require.context('@/views/', true, /index\.vue$/),
  lazyLoad: filePath => import(`@/views/${filePath}`)
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
```
