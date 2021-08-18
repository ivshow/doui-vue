<p align="center">
  <a href="http://doui.dooomi.com" target="_blank">
    <img width="200" src="http://f.dooomi.com/image/do.png">
  </a>
</p>

<br/>

<div align="center">
基于 Vue2 和 <a href="https://antdv.com" target="_blank">Ant Design Vue</a> 二次封装常用的业务组件、工具类集合。
</div>

---

## 特性

- 常用业务组件
- 内置 css 样式
- 常用的工具方法
- 自定义指令
- vuex
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
import Doui, { Vuex } from 'doui-vue';
import 'doui-vue/dist/index.css';

Vue.use(Doui);

const { store } = new Vuex();

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
```

<br/>

## 快速上手

> 以下内容已注入，无需通过`import`引入，可直接使用

---

1. ant-design-vue:

```js
// 组件
<a-button type="primary">主要按钮</a-button>;

// api
this.$message.success('提示文案');

...
```

2. vuex:

```js
// 配置
const { store, update } = new Vuex({
  saveKeys: ['vuex_common'],
  state: {
    vuex_loading: false,
    vuex_common: {
      language: 'zh-CN'
    }
  }
});

// 读取
this.vuex_loading;

// 修改
this.$vuex('vuex_loading', true);
update('vuex_common.language', 'en-US');
```

3. utils:

```js
// local-storage
this.$ls();

// dayjs
this.$dayjs();

// cookie
this.$cookie();

// event
this.$event.$on();
this.$event.$emit();

// lodash
this.$d.map();
this.$d.find();
this.$d.cloneDeep();

...
```

4. 内置样式:

```
.d-rela
.d-abso
.d-flex
.d-flex-1
.d-text-left
.d-font-10
.d-m-10
.d-p-10

...
```

5. 自定义 directive:

```vue
<component v-click-outside="onClickOutside"></component>
```

6. vue-styled-components:

```js
const Title = styled.div`
  color: ${props => props.color};
`;

<Title color="red">Title</Title>;
```
