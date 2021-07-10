---
home: false
footer: MIT Licensed | Copyright © 2021 jaydon Left-Handed
---

# 简介

> 基于 Vue2 和 [Ant Design Vue](https://antdv.com) 二次封装常用的业务组件、工具类集合。

## 主要功能

- 常用业务组件
- 内置 css 样式库
- 注入常用的工具方法
- 注入 vuex

## 安装

```bash
npm install doui-vue -S
# OR
yarn add doui-vue
```

## 使用

```js
import Vue from 'vue';
import App from './App';
import Doui, { vuex } from 'doui-vue';
import 'doui-vue/dist/doui-vue.css';

Vue.use(Doui);

new Vue({
  store: vuex.store,
  render: h => h(App)
}).$mount('#app');
```
