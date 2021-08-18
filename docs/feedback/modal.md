# Modal 弹框

继承 `Antd Modal`的所有 Api，通过函数调用的方式打开弹框

## 基本使用

::: demo

```vue
<template>
  <d-button @click="handleOpen">打开弹框</d-button>
</template>

<script>
export default {
  methods: {
    handleOpen() {
      this.$openModal({
        title: '弹框',
        content: <div>自定义组件</div>,
        onOk: this.handleClose
      });
    },
    handleClose() {
      console.log('点击确定，弹框关闭了');
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
