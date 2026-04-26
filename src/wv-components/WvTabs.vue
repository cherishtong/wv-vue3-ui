<script setup lang="ts">
import { computed, ref } from "vue";
import { cn } from "@/lib/utils";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "radix-vue";

interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
}

interface Props {
  items?: TabItem[];
  modelValue?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  modelValue: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const currentValue = ref(props.modelValue || props.items[0]?.value || "");

const onValueChange = (value: string) => {
  currentValue.value = value;
  emit("update:modelValue", value);
};
</script>

<template>
  <TabsRoot
    :model-value="currentValue"
    :class="cn('w-full', props.class)"
    @update:model-value="onValueChange"
  >
    <TabsList
      class="flex gap-0 border-b border-gray-200"
    >
      <TabsTrigger
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        class="px-4 py-2.5 text-sm font-medium border-b-2 border-transparent transition-colors data-[state=active]:border-vermilion data-[state=active]:text-vermilion text-gray-500 hover:text-ink disabled:opacity-40 cursor-pointer"
      >
        {{ item.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      class="pt-4"
    >
      <slot :name="item.value" />
    </TabsContent>
  </TabsRoot>
</template>
