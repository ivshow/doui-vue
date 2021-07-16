---
pageClass: quick-start
---

# 快速上手

> 以下内容已注入，无需通过`import`引入，可直接使用

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
Vue.use(Doui, {
  vuex: {
    saveKeys: ['vuex_common'],
    initialState: {
      vuex_loading: false,
      vuex_common: {
        language: 'zh-CN'
      }
    }
  }
});

// 读取
this.vuex_loading;

// 修改
this.$vuex('vuex_loading', true);
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
