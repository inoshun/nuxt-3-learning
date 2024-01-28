<script lang="ts" setup>
defineProps<{
  size: number
  axis: 'vertical' | 'horizontal'
}>()
</script>

<template>
  <span
    class="block"
    :style="{
      width: axis === 'vertical' ? '1px' : `${size}px`,
      height: axis === 'horizontal' ? '1px' : `${size}px`,
    }"
  ></span>
</template>
