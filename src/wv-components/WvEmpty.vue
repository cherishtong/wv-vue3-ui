<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-vue-next";

interface Props {
  icon?: any;
  text?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "暂无数据",
});
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col items-center justify-center py-12 text-center',
        props.class
      )
    "
  >
    <component
      :is="icon || Inbox"
      class="w-12 h-12 text-gray-300 mb-4"
      stroke-width="1.5"
    />
    <p class="text-sm text-gray-500 mb-4">{{ text }}</p>
    <slot name="action" />
  </div>
</template>
