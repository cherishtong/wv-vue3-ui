<script setup lang="ts">
import { ref } from "vue";
import DocsCodeBlock from "./DocsCodeBlock.vue";

interface Props {
  code?: string;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  code: "",
  dark: false,
});

const showCode = ref(false);
</script>

<template>
  <div class="preview border border-black/[0.08] rounded-xl overflow-hidden my-6 bg-white">
    <div
      class="preview-body p-8 flex items-center justify-center flex-wrap gap-4 min-h-[100px]"
      :class="{ 'bg-dark-matrix': dark }"
    >
      <slot />
    </div>
    <div v-if="code" class="preview-footer border-t border-black/[0.06] bg-black/[0.01]">
      <button
        class="w-full text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-[0.05em] cursor-pointer hover:text-vermilion transition-colors"
        @click="showCode = !showCode"
      >
        {{ showCode ? "收起代码" : "查看代码" }}
      </button>
      <div v-if="showCode">
        <DocsCodeBlock :code="code" />
      </div>
    </div>
  </div>
</template>
