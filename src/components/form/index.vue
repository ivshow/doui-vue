<template>
  <a-form-model ref="ruleForm" :model="form" :rules="rules">
    <a-form-model-item label="name" prop="user">
      <a-input v-model="form.user" placeholder="username">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25);" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="password" prop="password">
      <a-input v-model="form.password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25);" />
      </a-input>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
const defaultform = {
  user: '',
  password: ''
};

export default {
  props: ['value'],
  data() {
    return {
      form: Object.assign({}, defaultform, this.value),
      rules: {
        user: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
        password: [{ required: true, message: 'Please input Activity password', trigger: 'blur' }]
      }
    };
  },
  methods: {
    submit() {
      return new Promise(resolve => this.$refs.ruleForm.validate(valid => valid && resolve(this.form)));
    }
  }
};
</script>
