<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "radix-vue";

interface DropdownItem {
  label: string;
  action?: () => void;
  divider?: boolean;
  active?: boolean;
  disabled?: boolean;
}

interface Props {
  items?: DropdownItem[];
  triggerLabel?: string;
  class?: string;
  menuClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  triggerLabel: "菜单",
});
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger
      :class="
        cn(
          'inline-flex items-center gap-1 px-4 py-2 bg-ink text-white text-sm rounded-md cursor-pointer',
          props.class
        )
      "
    >
      {{ triggerLabel }}
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      :class="
        cn(
          'min-w-[180px] bg-white border border-gray-200 rounded-lg shadow-depth-3 p-1.5 z-50',
          props.menuClass
        )
      "
    >
      <template v-for="(item, idx) in items" :key="idx">
        <DropdownMenuSeparator v-if="item.divider" class="h-px bg-gray-200 my-1.5" />
        <DropdownMenuItem
          v-else
          :disabled="item.disabled"
          :class="
            cn(
              'px-3 py-2 text-sm rounded cursor-pointer transition-colors',
              item.active
                ? 'bg-vermilion/10 text-vermilion'
                : 'text-gray-700 hover:bg-gray-100',
              item.disabled && 'opacity-40 cursor-not-allowed'
            )
          "
          @select="item.action?.()"
        >
          {{ item.label }}
        </DropdownMenuItem>
      </template>
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>
