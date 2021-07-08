# 字体预设

往往在业务开发中，我们都会统一一套字体。

## 示例

```css
@font-face {
  font-family: 'SpaceGrotesk';
  src: url('./fonts/SpaceGrotesk-Regular.otf');
  font-display: swap;
}

@font-face {
  font-family: 'SpaceGrotesk-Light';
  src: url('./fonts/SpaceGrotesk-Light.otf');
  font-display: swap;
}

@font-face {
  font-family: 'SpaceGrotesk-Bold';
  src: url('./fonts/SpaceGrotesk-Bold.otf');
  font-display: swap;
}

@font-face {
  font-family: 'SpaceGrotesk-Medium';
  src: url('./fonts/SpaceGrotesk-Medium.otf');
  font-display: swap;
}

body {
  font-family: 'SpaceGrotesk-Medium' !important;
}
```
