<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvInput } from "@/wv-components";
import { ref } from "vue";

const inputValue = ref("");
const ghostValue = ref("");
const errorValue = ref("Invalid input");
const successValue = ref("Valid input");
const warningValue = ref("Check this");

const installCode = `import { WvInput } from "@/wv-components";`;
const defaultCode = `<WvInput v-model="value" placeholder="请输入内容" />`;
const ghostCode = `<WvInput variant="ghost" v-model="value" placeholder="Ghost input" />`;
const darkCode = `<WvInput variant="dark" v-model="value" placeholder="Dark input" />`;
const errorCode = `<WvInput status="error" v-model="value" placeholder="Error state" />`;
const successCode = `<WvInput status="success" v-model="value" placeholder="Success state" />`;
const warningCode = `<WvInput status="warning" v-model="value" placeholder="Warning state" />`;
const smCode = `<WvInput size="sm" placeholder="Small" />`;
const defaultSizeCode = `<WvInput size="default" placeholder="Default" />`;
const lgCode = `<WvInput size="lg" placeholder="Large" />`;

const propsData = [
  { name: "variant", type: "default | ghost | dark", default: "default", description: "输入框视觉变体" },
  { name: "size", type: "sm | default | lg", default: "default", description: "输入框尺寸" },
  { name: "modelValue", type: "string", default: "", description: "v-model 双向绑定值" },
  { name: "placeholder", type: "string", default: "", description: "占位提示文本" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
  { name: "type", type: "string", default: "text", description: "原生 input type 属性" },
  { name: "status", type: "error | success | warning", default: "—", description: "输入验证状态" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">输入框 Input</h1>
    <p class="text-gray-500 mb-8">变体 default / ghost / dark · 状态 error / success / warning · 尺寸 sm / default / lg。</p>

    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">默认 Default</h2>
    <DocsPreview :code="defaultCode">
      <WvInput v-model="inputValue" placeholder="请输入内容" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Ghost</h2>
    <DocsPreview :code="ghostCode">
      <WvInput variant="ghost" v-model="ghostValue" placeholder="Ghost input" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">Dark</h2>
    <DocsPreview dark :code="darkCode">
      <WvInput variant="dark" v-model="ghostValue" placeholder="Dark input" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">状态 Status</h2>
    <DocsPreview :code="errorCode">
      <WvInput status="error" v-model="errorValue" placeholder="Error state" />
    </DocsPreview>
    <DocsPreview :code="successCode">
      <WvInput status="success" v-model="successValue" placeholder="Success state" />
    </DocsPreview>
    <DocsPreview :code="warningCode">
      <WvInput status="warning" v-model="warningValue" placeholder="Warning state" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">尺寸 Sizes</h2>
    <DocsPreview :code="smCode">
      <WvInput size="sm" placeholder="Small" />
    </DocsPreview>
    <DocsPreview :code="defaultSizeCode">
      <WvInput size="default" placeholder="Default" />
    </DocsPreview>
    <DocsPreview :code="lgCode">
      <WvInput size="lg" placeholder="Large" />
    </DocsPreview>

    <h2 class="font-serif text-xl font-bold text-ink mt-10 mb-4">API</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>
