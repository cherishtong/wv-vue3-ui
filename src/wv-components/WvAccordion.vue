<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "radix-vue";

interface AccordionItemData {
  title: string;
  content: string;
  value: string;
  disabled?: boolean;
}

interface Props {
  items?: AccordionItemData[];
  class?: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  type: "single",
  collapsible: true,
});
</script>

<template>
  <AccordionRoot
    :type="type"
    :collapsible="collapsible !== false ? collapsible : undefined"
    :class="cn('w-full', props.class)"
  >
    <AccordionItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
      class="border-b border-gray-100 last:border-b-0"
    >
      <AccordionTrigger
        class="flex items-center justify-between w-full py-4 px-0 text-left text-base font-serif font-bold text-ink cursor-pointer hover:text-vermilion transition-colors"
      >
        {{ item.title }}
        <svg
          class="w-5 h-5 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </AccordionTrigger>
      <AccordionContent
        class="overflow-hidden data-[state=open]:animate-[accordion-down_0.3s_ease-out] data-[state=closed]:animate-[accordion-up_0.3s_ease-out]"
      >
        <div class="pb-4 text-sm text-gray-500 leading-relaxed">
          {{ item.content }}
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
@keyframes accordion-down {
  from { height: 0; opacity: 0; }
  to { height: var(--radix-accordion-content-height); opacity: 1; }
}
@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); opacity: 1; }
  to { height: 0; opacity: 0; }
}
</style>
