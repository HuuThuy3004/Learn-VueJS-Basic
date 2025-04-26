<template>
  <div>
    <!-- ------------ -->
    <span>Input name: </span>
    <input type="text" v-model="name" />
    <p>My name: {{ name }}</p>
    <!-- ------------ -->
    <select v-model="selected">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <p>Selected: {{ selected }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
let name = ref('');

// Component name
defineOptions({
  name: "MyComponentSs5Vue"
});

const selected = ref('A')
const options = ref([
  { text: 'Option A', value: 'A' },
  { text: 'Option B', value: 'B' },
  { text: 'Option C', value: 'C' }
]);
</script>

<style></style>
