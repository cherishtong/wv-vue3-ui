<script setup lang="ts">
interface PropDef {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface Props {
  props?: PropDef[];
}

defineProps<Props>();
</script>

<template>
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-black/[0.02] border-b-2 border-black/[0.06]">
          <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Prop</th>
          <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Type</th>
          <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Default</th>
          <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in props" :key="prop.name" class="border-b border-black/[0.04] hover:bg-black/[0.01]">
          <td class="px-4 py-3 font-mono text-vermilion font-medium">{{ prop.name }}</td>
          <td class="px-4 py-3 font-mono text-xs text-gray-600">{{ prop.type }}</td>
          <td class="px-4 py-3 font-mono text-xs text-gray-400">{{ prop.default || "—" }}</td>
          <td class="px-4 py-3 text-gray-600">{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
