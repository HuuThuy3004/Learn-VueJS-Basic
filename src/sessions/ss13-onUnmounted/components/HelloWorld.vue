<template>
  <div>Hello, World!</div>
</template>

<script setup>
import { onUnmounted } from 'vue';

onUnmounted(() => {
  console.log('Component is being unmounted');
});

</script>

<style>

</style>
