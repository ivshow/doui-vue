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

| 参数             | 说明                                                | 类型               | 默认值 |
| ---------------- | --------------------------------------------------- | ------------------ | ------ |
| v-model          | 当前收起状态，当没有该属性时，会显示内置的`trigger` | Boolean            | -      |
| sider            | 菜单配置                                            | Array              | -      |
| theme            | 主题颜色                                            | String: light dark | dark   |
| menuProps        | Menu 菜单项 props                                   | Object             | -      |
| subMenuProps     | Submenu 菜单项 props                                | Object             | -      |
| menuListeners    | Menu 菜单项事件                                     | Object             | -      |
| subMenuListeners | Submenu 菜单项事件                                  | Object             | -      |

## 事件

| 事件名称 | 说明                  | 回调参数            |
| -------- | --------------------- | ------------------- |
| collapse | 展开-收起时的回调函数 | Function(collapsed) |

## 插槽

| 事件名称     | 说明                                   | 默认值            |
| ------------ | -------------------------------------- | ----------------- |
| sider-header | 侧边栏头部                             | -                 |
| header       | 右侧头部                               | -                 |
| body         | 右侧主体 `slot-scope="{ breadcrumb }"` | `<router-view />` |
