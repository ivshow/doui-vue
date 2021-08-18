# Drawer 抽屉

继承 `Antd Drawer`的所有 Api，通过函数调用的方式打开抽屉

## 基本使用

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
        content: <div>自定义组件</div>,
        onOk: this.handleClose
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

| 参数    | 说明         | 类型                  | 默认值 |
| ------- | ------------ | --------------------- | ------ |
| content | 自定义组件   | VNode / function(h)   | -      |
| onOk    | 点击确定回调 | () => Promise\<void\> | -      |
