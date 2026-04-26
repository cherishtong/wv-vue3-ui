<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

type Status = "online" | "offline" | "busy";

const statusColorMap: Record<Status, string> = {
  online: "bg-green-500 animate-wv-status-pulse",
  offline: "bg-gray-400",
  busy: "bg-amber-500 animate-wv-status-pulse",
};

interface Props {
  status?: Status;
  label?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  status: "online",
});

const dotClasses = computed(() =>
  cn(statusColorMap[props.status], "w-2 h-2 rounded-full")
);
</script>

<template>
  <span :class="cn('inline-flex items-center gap-1.5', props.class)">
    <span :class="dotClasses" />
    <span v-if="label" class="text-xs text-inherit">{{ label }}</span>
    <slot />
  </span>
</template>
