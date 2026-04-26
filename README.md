<p align="center">
  <h1 align="center">WuWei Design · 无为设计</h1>
  <p align="center">Vue 3 + Tailwind CSS 4 组件库 · 道法自然</p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/wv-vue3-ui"><img src="https://img.shields.io/npm/v/wv-vue3-ui" alt="npm" /></a>
  <a href="https://github.com/wuwei/wv-vue3-ui/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/wv-vue3-ui" alt="license" /></a>
</p>

---

## 设计理念

以中国传统哲学「**无为**」为精神内核，融合 2026 年设计趋势——液态玻璃、空间感、AI 对话、功能性微动效——构建的现代 Vue 3 UI 组件库。

> 不泥于古，不惑于今 · 顺应自然，不妄为不强为

## 特性

- 🎨 **28 个组件** — 覆盖基础、导航、数据展示、反馈、AI 组件
- 🧬 **shadcn-vue 模式** — CVA 变体管理、`cn()` 类名合并、独立 SFC
- 🎯 **Tailwind CSS 4** — CSS-first 配置，原生 `@theme` token
- ♿ **无障碍** — Radix Vue 基元驱动复杂交互组件
- 📦 **TypeScript** — 完整类型导出
- 🖌️ **WuWei 设计令牌** — 墨色/朱砂/纸张色/深度阴影/玻璃拟态

## 快速开始

```bash
npm install wv-vue3-ui
# or
pnpm add wv-vue3-ui
```

### Tailwind CSS 配置

```css
/* app.css */
@import "tailwindcss";
@import "wv-vue3-ui/style.css";
```

### 使用

```vue
<script setup lang="ts">
import { WvButton, WvCard, WvInput } from "wv-vue3-ui"
</script>

<template>
  <WvButton variant="primary">开始使用</WvButton>
</template>
```

## 组件列表

### 基础组件
`WvButton` `WvInput` `WvCard` `WvGlassCard` `WvNavbar` `WvBadge` `WvTag` `WvAlert` `WvAvatar` `WvProgress`

### 导航组件
`WvTabs` `WvBreadcrumb` `WvPagination` `WvDropdown`

### 数据展示
`WvTable` `WvTimeline` `WvSteps` `WvAccordion`

### 反馈
`WvSkeleton` `WvEmpty`

### AI 组件
`WvChat` `WvReasoning`

### 特效
`WvSpatialStack` `WvTextGradient` `WvDepthLayer`

### 动效
`WvMotion` `WvScrollReveal` `WvStatusPulse`

## 本地文档

```bash
git clone https://github.com/wuwei/wv-vue3-ui.git
cd wv-vue3-ui
pnpm install
pnpm dev
```

访问 `http://localhost:5173` 查看组件文档。

## License

MIT © wuwei
