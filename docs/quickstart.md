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
const { store, update } = new Vuex({
  saveKeys: ['vuex_common'],
  state: {
    vuex_common: {
      language: 'zh-CN'
    }
  }
});

// 读取
this.vuex_common.language;

// 修改
this.$vuex('vuex_common.language', 'zh-CN');
update('vuex_common.language', 'en-US');
```

3. utils:

```js
// local-storage
this.$ls();

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

<button v-clipboard:copy="message" v-clipboard:success="onCopy">Copy</button>
```
