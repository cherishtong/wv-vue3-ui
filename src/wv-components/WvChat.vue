<script setup lang="ts">
import { ref } from "vue";
import { cn } from "@/lib/utils";
import { Send } from "lucide-vue-next";

interface Message {
  role: "user" | "assistant";
  content: string;
  avatar?: string;
}

interface Props {
  messages?: Message[];
  placeholder?: string;
  headerTitle?: string;
  headerAvatar?: string;
  statusText?: string;
  online?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  messages: () => [],
  placeholder: "输入你的问题...",
  headerTitle: "无为助手",
  headerAvatar: "道",
  statusText: "在线",
  online: true,
});

const emit = defineEmits<{
  send: [message: string];
}>();

const inputValue = ref("");

const handleSend = () => {
  const trimmed = inputValue.value.trim();
  if (trimmed) {
    emit("send", trimmed);
    inputValue.value = "";
  }
};
</script>

<template>
  <div
    :class="
      cn(
        'rounded-[1.25rem] overflow-hidden bg-dark-matrix text-white border border-white/[0.08] flex flex-col',
        props.class
      )
    "
  >
    <!-- Header -->
    <div class="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06]">
      <div
        class="w-9 h-9 rounded-full bg-gradient-to-br from-vermilion to-red-900 flex items-center justify-center font-serif text-sm font-bold"
      >
        {{ headerAvatar }}
      </div>
      <div>
        <div class="text-sm font-semibold">{{ headerTitle }}</div>
        <div class="text-xs text-white/40 flex items-center gap-1.5">
          <span
            :class="
              cn(
                'w-1.5 h-1.5 rounded-full animate-wv-status-pulse',
                online ? 'bg-green-500' : 'bg-gray-500'
              )
            "
          />
          {{ statusText }}
        </div>
      </div>
    </div>

    <!-- Messages -->
    <div class="flex-1 p-6 flex flex-col gap-5 overflow-y-auto">
      <div
        v-for="(msg, idx) in messages"
        :key="idx"
        :class="
          cn(
            'flex gap-3 max-w-[85%]',
            msg.role === 'user' && 'self-end flex-row-reverse'
          )
        "
      >
        <!-- Avatar -->
        <div
          :class="
            cn(
              'w-7 h-7 rounded-full flex items-center justify-center font-serif text-xs font-bold flex-shrink-0',
              msg.role === 'assistant'
                ? 'bg-white/[0.08] text-white/80'
                : 'bg-gray-700 text-white'
            )
          "
        >
          {{ msg.role === "assistant" ? "道" : "我" }}
        </div>
        <!-- Bubble -->
        <div
          :class="
            cn(
              'py-3 px-4 text-sm leading-relaxed',
              msg.role === 'assistant'
                ? 'bg-white/[0.06] rounded-2xl rounded-tl text-white/90'
                : 'bg-gradient-to-br from-vermilion to-red-800 rounded-2xl rounded-tr text-white'
            )
          "
        >
          {{ msg.content }}
        </div>
      </div>
    </div>

    <!-- Input -->
    <div
      class="flex items-center gap-3 px-6 py-3 border-t border-white/[0.06] bg-white/[0.02]"
    >
      <input
        v-model="inputValue"
        :placeholder="placeholder"
        class="flex-1 py-3 px-4 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white text-sm outline-none placeholder:text-white/30 focus:border-vermilion transition-colors"
        @keydown.enter="handleSend"
      />
      <button
        class="w-10 h-10 rounded-xl bg-gradient-to-br from-vermilion to-red-800 flex items-center justify-center text-white cursor-pointer flex-shrink-0 hover:opacity-90 transition-opacity"
        @click="handleSend"
      >
        <Send class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
