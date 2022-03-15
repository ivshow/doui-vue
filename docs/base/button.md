# Button 按钮

继承 `Antd Button`的所有 Api

## 基本使用

::: demo

```vue
<template>
  <div>
    <d-button @click="handleAdd">新增</d-button>
    <d-button @click="handleEdit">编辑</d-button>
  </div>
</template>

<script>
const fetch = form => {
  console.log('请求开始: ', form);
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
      console.log('请求结束');
    }, 2000)
  );
};

export default {
  methods: {
    refresh() {
      console.log('刷新');
    },
    openModal({ title, onOk, value }) {
      this.$openModal({
        title,
        content: () => <demo-form ref="form" value={value} />,
        onOk: () => this.$refs.form.submit().then(onOk).then(this.refresh)
      });
    },
    handleAdd() {
      this.openModal({
        title: '新增',
        onOk: fetch
      });
    },
    handleEdit() {
      this.openModal({
        title: '编辑',
        value: {
          user: 'user',
          password: 'password'
        },
        onOk: fetch
      });
    }
  }
};
</script>
```

:::

## 属性

| 参数   | 说明   | 类型     | 默认值       |
|------|------|--------|-----------|
| type | 按钮类型 | string | `primary` |
