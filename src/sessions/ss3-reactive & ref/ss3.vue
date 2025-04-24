<template>
  <div>
    <h2>ss3</h2>
    <h3>ref: {{ count }}</h3>
    <h3>ref array: {{ arr }}</h3>
    <h3>ref object: {{ obj }}</h3>
    <h3>reactive: {{ state.count }} - {{ state.isOn }}</h3>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const count = ref(0);
count.value = count.value + 1;
count.value = count.value + 2;
count.value = count.value + 3;
count.value = count.value + 4;

const arr = ref([1, 2, 3]);
arr.value.push(4);
arr.value.push(5);

const obj = ref({ name: 'John', age: 30 });
obj.value.name = 'Jane';
obj.value.age = 31;

const state = reactive({
  count: 0,
  isOn: true,
});
state.count = state.count + 1;
state.count = state.count + 2;
state.count = state.count + 3;
</script>

<style>

</style>