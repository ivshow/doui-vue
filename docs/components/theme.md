# 主题预设

预设 Antd View 的主题，通过引入 [antd-view/src/theme/vars.json](https://github.com/ivshow/antd-view/blob/master/src/theme/vars.json) 文件可以获取到所有的预设变量

```ts
  "primary-color": "#1890ff",
  "link-color": "1890ff",
  "success-color": "#52c41a",
  "warning-color": "#faad14",
  "error-color": "#f5222d",
  "heading-color": "rgba(0, 0, 0, 0.85)",
  "text-color": "rgba(0, 0, 0, 0.65)",
  "text-color-secondary": "rgba(0, 0, 0, 0.45)",
  "screen-xs": 0,
  "screen-sm": 576,
  "screen-md": 768,
  "screen-lg": 992,
  "screen-xl": 1200,
  "screen-xxl": 1600,
  "layout-header-background": "#ffffff",
  "input-height-base": "32px",
  "input-height-lg": "40px",
  "input-height-sm": "24px",
  "basic-number": 4
```

除了最后一个 basic-number 是工具 class 的 space 的基础数值，其他均为 Antd View 的主题变量。

#### 备注

之所以用 json 文件，是因为该变量集合既支持了在 commonjs 规范下引入，也支持在 esm 下引入，因此我们也暴露了该变量集合到 <code>app.config.globalProperties</code> 中，并且可以直接使用该文件预设到 less 变量中。
