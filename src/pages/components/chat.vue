<script setup lang="ts">
import DocsPreview from "@/docs/DocsPreview.vue";
import DocsCodeBlock from "@/docs/DocsCodeBlock.vue";
import DocsPropsTable from "@/docs/DocsPropsTable.vue";
import { WvChat } from "@/wv-components";
import { ref } from "vue";

interface Message {
  role: "user" | "assistant";
  content: string;
  avatar?: string;
}

const messages = ref<Message[]>([
  { role: "assistant", content: "你好，我是无为助手。有何疑问？" },
  { role: "user", content: "什么是有为与无为？" },
  { role: "assistant", content: "道常无为而无不为。顺应自然，不强为、不妄为，便是无为之道。" },
]);

const handleSend = (text: string) => {
  messages.value.push({ role: "user", content: text });
};

const installCode = `import { WvChat } from "@/wv-components";`;
const chatCode = `<script setup lang="ts">
import { WvChat } from "@/wv-components";
import { ref } from "vue";

const messages = ref([
  { role: "assistant", content: "你好，我是无为助手。有何疑问？" },
  { role: "user", content: "什么是有为与无为？" },
  { role: "assistant", content: "道常无为而无不为。" },
]);

const handleSend = (text: string) => {
  messages.value.push({ role: "user", content: text });
};
<\/script>

<template>
  <WvChat :messages="messages" @send="handleSend" />
</template>`;

const propsData = [
  { name: "messages", type: "Message[]", default: "[]", description: "消息列表，每条含 role / content / avatar?" },
  { name: "placeholder", type: "string", default: "输入你的问题...", description: "输入框占位文字" },
  { name: "headerTitle", type: "string", default: "无为助手", description: "头部标题" },
  { name: "headerAvatar", type: "string", default: "道", description: "头部头像文字" },
  { name: "statusText", type: "string", default: "在线", description: "状态文字" },
  { name: "online", type: "boolean", default: "true", description: "是否在线，控制状态点颜色" },
  { name: "class", type: "string", default: "", description: "自定义 CSS 类名" },
];
</script>

<template>
  <div class="py-8">
    <h1 class="font-serif text-3xl font-bold text-ink mb-2">对话 Chat</h1>
    <p class="text-gray-500 mb-10">AI 对话界面。深色矩阵风。头像、消息气泡、输入框、发送按钮。支持 Enter 发送。</p>

    <h2 class="font-serif text-lg font-bold text-ink mb-4">安装</h2>
    <DocsCodeBlock :code="installCode" />

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">示例</h2>
    <DocsPreview :code="chatCode">
      <WvChat
        class="w-full max-w-md max-h-[400px]"
        :messages="messages"
        @send="handleSend"
      />
    </DocsPreview>

    <h2 class="font-serif text-lg font-bold text-ink mt-10 mb-4">API 参考</h2>
    <DocsPropsTable :props="propsData" />
  </div>
</template>
