<template>
  <div>
    <h1>Ronaldo</h1>
    <img src="https://i.pinimg.com/736x/ec/6c/cc/ec6ccce2e47034dedad4b01cdbc464a5.jpg" alt="">
    <p>Name: {{ infoRonaldo.name }}</p>
    <p>Age: {{ infoRonaldo.age }}</p>
    <p>Birthday: {{ infoRonaldo.birth }}</p>
    <p>Country: {{ infoRonaldo.country }}</p>
    <p>Ballondor: {{ infoRonaldo.ballondor }}</p>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CR7Component'
});

import { inject } from 'vue';
const infoRonaldo = inject('infoRonaldo');
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}
</style>
