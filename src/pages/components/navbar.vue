<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvNavbar } from "@/wv-components";

const menuItems = [
  { label: "文档", href: "#", active: true },
  { label: "组件", href: "#" },
  { label: "关于", href: "#" },
];

const installCode = `import { WvNavbar } from "@/wv-components";`;
const defaultCode = `<WvNavbar brand="WuWei" :items="[{ label: '文档', href: '#' }]" />`;
const transparentCode = `<WvNavbar brand="WuWei" transparent :items="items" />`;

const propsData = [
  { name: "brand", type: "string", default: "", description: "品牌/站点名称" },
  { name: "brandHref", type: "string", default: "#", description: "品牌 Logo 链接地址" },
  { name: "items", type: "NavItem[]", default: "[]", description: "导航菜单项 (label, href, active)" },
  { name: "fixed", type: "boolean", default: "true", description: "是否固定在顶部" },
  { name: "transparent", type: "boolean", default: "false", description: "是否使用透明背景" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">导航栏 Navbar</h1>
    <p class="text-gray-500 mb-8">固定顶部 + 品牌 Logo + 菜单链接 + 移动端汉堡按钮。滚动时背景加深。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">默认 Default</h2>
    <DocsPreview :code="defaultCode">
      <div class="w-full">
        <WvNavbar :fixed="false" brand="WuWei" :items="menuItems" />
      </div>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Transparent 透明</h2>
    <DocsPreview :code="transparentCode">
      <div class="w-full">
        <WvNavbar :fixed="false" brand="WuWei" transparent :items="menuItems" />
      </div>
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>
