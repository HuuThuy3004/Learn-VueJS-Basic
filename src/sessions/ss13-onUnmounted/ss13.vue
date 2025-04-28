<template>
  <div>
    <h1>Session13</h1>
    <div v-if="on">
      <HelloWorld/>
    </div>
    <button @click="on = false">Remove Component</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const on = ref(true);

defineOptions({
  name: 'Session13Component'
});
</script>

<style scoped>
</style>
