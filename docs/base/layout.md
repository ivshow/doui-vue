# Layout 布局

继承 `Antd Layout`的所有 Api

## 基本使用

::: demo 内置 `trigger` 触发器

```vue
iframe layout/trigger.vue
```

:::

::: demo 自定义 `trigger` 触发器

```vue
iframe layout/custom-trigger.vue
```

:::

## 属性

| 参数      | 说明                             | 类型      | 默认值 |
|---------|--------------------------------|---------|-----|
| v-model | 当前收起状态，当没有该属性时，会显示内置的`trigger` | boolean | -   |

## 事件

| 事件名称          | 说明                | 回调参数                             |
|---------------|-------------------|----------------------------------|
| collapse      | 展开-收起时的回调函数       | function(collapsed)              |
| clickMenuItem | 点击 MenuItem 调用此函数 | function({ item, key, keyPath }) |

## 插槽

| 事件名称         | 说明    | 默认值               |
|--------------|-------|-------------------|
| sider-header | 侧边栏头部 | -                 |
| header       | 右侧头部  | -                 |
| body         | 右侧主体  | `<router-view />` |
