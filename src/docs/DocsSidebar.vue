<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isActive = (path: string) => route.path === path;

const groups = [
  {
    title: "概述",
    items: [
      { label: "简介", path: "/intro" },
      { label: "快速开始", path: "/install" },
    ],
  },
  {
    title: "设计令牌",
    items: [{ label: "色彩 · 字体 · 间距", path: "/tokens" }],
  },
  {
    title: "基础组件",
    items: [
      { label: "按钮 Button", path: "/components/button" },
      { label: "输入框 Input", path: "/components/input" },
      { label: "卡片 Card", path: "/components/card" },
      { label: "液态玻璃卡 GlassCard", path: "/components/glass-card" },
      { label: "导航栏 Navbar", path: "/components/navbar" },
      { label: "徽标 Badge", path: "/components/badge" },
      { label: "标签 Tag", path: "/components/tag" },
      { label: "提示 Alert", path: "/components/alert" },
      { label: "头像 Avatar", path: "/components/avatar" },
      { label: "进度条 Progress", path: "/components/progress" },
    ],
  },
  {
    title: "导航组件",
    items: [
      { label: "标签页 Tabs", path: "/components/tabs" },
      { label: "面包屑 Breadcrumb", path: "/components/breadcrumb" },
      { label: "分页 Pagination", path: "/components/pagination" },
      { label: "下拉菜单 Dropdown", path: "/components/dropdown" },
    ],
  },
  {
    title: "数据展示",
    items: [
      { label: "表格 Table", path: "/components/table" },
      { label: "时间轴 Timeline", path: "/components/timeline" },
      { label: "步骤条 Steps", path: "/components/steps" },
      { label: "折叠面板 Accordion", path: "/components/accordion" },
    ],
  },
  {
    title: "反馈",
    items: [
      { label: "骨架屏 Skeleton", path: "/components/skeleton" },
      { label: "空状态 Empty", path: "/components/empty" },
    ],
  },
  {
    title: "AI 组件",
    items: [
      { label: "对话 Chat", path: "/components/chat" },
      { label: "推理路径 Reasoning", path: "/components/reasoning" },
    ],
  },
  {
    title: "特效",
    items: [
      { label: "空间堆叠 SpatialStack", path: "/components/spatial-stack" },
      { label: "文字流光 TextGradient", path: "/components/text-gradient" },
      { label: "景深 DepthLayer", path: "/components/depth-layer" },
    ],
  },
  {
    title: "动效",
    items: [
      { label: "动效预设 Motion", path: "/components/motion" },
      { label: "滚动揭示 ScrollReveal", path: "/components/scroll-reveal" },
      { label: "状态脉冲 StatusPulse", path: "/components/status-pulse" },
    ],
  },
];
</script>

<template>
  <div v-for="group in groups" :key="group.title" class="mb-6">
    <div class="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2 pl-1">
      {{ group.title }}
    </div>
    <router-link
      v-for="item in group.items"
      :key="item.path"
      :to="item.path"
      class="block py-1.5 px-2 text-[0.8125rem] text-gray-500 no-underline rounded border-l-2 border-transparent transition-all hover:text-vermilion hover:bg-vermilion/[0.04]"
      :class="{ 'text-vermilion border-l-vermilion font-medium': isActive(item.path) }"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>
