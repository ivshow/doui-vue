# Responsive 响应式

根据不同断点展示不同组件

## 基本使用

::: demo

```vue
<template>
  <div>
    <d-desktop>Desktop</d-desktop>
    <d-tablet>Tablet</d-tablet>
    <d-mobile>Mobile</d-mobile>
    <d-no-desktop>No Desktop</d-no-desktop>
    <d-no-mobile>No Mobile</d-no-mobile>
  </div>
</template>
```

:::

## 属性

| 设备         | 断点范围                    |
|------------|-------------------------|
| desktop    | >=1200px                |
| tablet     | (>=768px) and (<1200px) |
| mobile     | <768px                  |
| no-desktop | <1200px                 |
| no-mobile  | >=768px                 |
