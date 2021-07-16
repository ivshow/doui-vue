# Drawer 抽屉

继承 `Antd Drawer`的所有 Api，抽屉内容可以传入自定义组件

<br/>

::: demo

```vue
<template>
  <d-button @click="handleOpen">打开抽屉</d-button>
</template>

<script>
export default {
  methods: {
    handleOpen() {
      this.$openDrawer({
        title: '抽屉',
        content: <d-form ref="form" />,
        onOk: () => this.$refs.form.submit().then(this.handleClose)
      });
    },
    handleClose() {
      console.log('点击确定，抽屉关闭了');
    }
  }
};
</script>
```

:::

## 属性

| 参数    | 说明         | 类型                | 默认值 |
| ------- | ------------ | ------------------- | ------ |
| content | 自定义组件   | VNode / function(h) |        |
| onOk    | 点击确定回调 | function            |        |
