<template>
  <div>
    <h1>Session14</h1>
    <input v-model="text" placeholder="Nhập gì đó..." />
    <p>Bạn đã nhập: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

defineOptions({
  name: 'WatchEffectExample'
})

const text = ref('')

watchEffect(() => {
  console.log('Input mới:', text.value)
});
</script>
