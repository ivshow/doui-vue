# Form 表单

继承 `Antd Form`的所有 Api

## 基本使用

::: demo

```vue
<template>
  <d-form ref="form" :model="form" :rules="rules">
    <a-form-model-item label="name" prop="user">
      <a-input v-model="form.user" placeholder="username">
        <a-icon slot="prefix" type="user" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="password" prop="password">
      <a-input v-model="form.password" placeholder="Password">
        <a-icon slot="prefix" type="lock" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <d-button @click="handleSubmit">提交</d-button>
      <d-button type="default" @click="handleResetFields">重置</d-button>
    </a-form-model-item>
  </d-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: '',
        password: ''
      },
      rules: {
        user: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
        password: [{ required: true, message: 'Please input Activity password', trigger: 'blur' }]
      }
    };
  },
  methods: {
    async handleSubmit() {
      const form = await this.$refs.form.submit();
      console.log(form);
    },
    handleResetFields() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
```

:::

## 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

## 方法

| 名称   | 说明                         | 参数                       |
| ------ | ---------------------------- | -------------------------- |
| submit | 表单校验成功后，返回表单数据 | () => Promise&lt;value&gt; |
