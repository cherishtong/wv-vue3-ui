<script setup lang="ts">
import { ref } from "vue";

interface Props {
  code?: string;
}

const props = withDefaults(defineProps<Props>(), {
  code: "",
});

const copied = ref(false);

const copyToClipboard = async () => {
  if (props.code) {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  }
};
</script>

<template>
  <div class="relative border-t border-white/[0.06]">
    <pre class="m-0 p-4 bg-ink text-gray-200 text-xs leading-relaxed overflow-x-auto font-mono"><code>{{ code }}</code></pre>
    <button
      class="absolute top-3 right-3 px-2 py-1 text-[0.65rem] rounded bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
      @click="copyToClipboard"
    >
      {{ copied ? "已复制" : "复制" }}
    </button>
  </div>
</template>
