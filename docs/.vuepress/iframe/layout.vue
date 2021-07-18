<!--
 * @Author : jaydon
 * @Date   : 2021-07-18 20:02
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <d-layout :sider="sider">
    <template #sider-header>
      <div class="logo" />
    </template>
    <template #header>layout-header</template>
    <template #body>
      <div :style="{ textAlign: 'center' }">
        ...
        <br />
        Really
        <br />...<br />...<br />...<br />
        long
        <br />...<br />...<br />...<br />...<br />...<br />... <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />... <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />... <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />
        content
      </div>
    </template>
  </d-layout>
</template>

<script>
export default {
  data() {
    return {
      sider: [
        {
          title: 'subnav 1',
          icon: 'user',
          children: [
            {
              title: 'option1 '
            },
            {
              title: 'option2 '
            },
            {
              title: 'option3 '
            }
          ]
        },
        {
          title: 'subnav 2',
          children: [
            {
              title: 'option1 '
            },
            {
              title: 'option2 '
            },
            {
              title: 'option3 '
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: #d8d8d8;
  margin: 16px;
}
</style>
