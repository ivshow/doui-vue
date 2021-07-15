## title: Container

# Container 容器

<code>d-container</code> 提供了将你的网站内容居中和水平填充的功能。 你还可以使用 <code>compact</code> 属性将容器在所有视口和设备尺寸上完全扩展。

::: demo

```vue
<template>
  <d-container>
    <a-row>
      <a-col :span="12">col-12</a-col>
      <a-col :span="12">col-12</a-col>
    </a-row>
    <a-row>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
    </a-row>
    <a-row>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
    </a-row>
  </d-container>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    };
  }
};
</script>
```

:::

## 属性

| 参数    | 说明                                   | 类型                 | 默认值             |
| ------- | -------------------------------------- | -------------------- | ------------------ |
| compact | <p>是否移除 d-container 的 padding</p> | <span>boolean</span> | <code>false</code> |

## 插槽

| 名称    | 描述                   |
| ------- | ---------------------- |
| default | <p>默认 Vue 插槽。</p> |
