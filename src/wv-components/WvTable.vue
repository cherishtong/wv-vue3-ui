<script setup lang="ts">
import { cn } from "@/lib/utils";

interface Column {
  key: string;
  label: string;
  class?: string;
}

interface Props {
  columns?: Column[];
  data?: Record<string, any>[];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  data: () => [],
});
</script>

<template>
  <div :class="cn('overflow-x-auto', props.class)">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-gray-50/50 border-b-2 border-gray-100">
          <th
            v-for="col in columns"
            :key="col.key"
            :class="
              cn(
                'text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500',
                col.class
              )
            "
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIdx) in data"
          :key="rowIdx"
          class="border-b border-gray-50 hover:bg-gray-50/30 transition-colors"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            :class="cn('px-4 py-3 text-ink', col.class)"
          >
            <slot :name="'cell-' + col.key" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="data.length === 0" class="text-center py-8 text-gray-400 text-sm">
      暂无数据
    </div>
  </div>
</template>
