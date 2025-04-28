<template>
  <div>
    <h1>Messi</h1>
    <img src="https://i.pinimg.com/736x/6d/e7/0e/6de70ee0979d9733ae96e98f8f252d4c.jpg" alt="">
    <p>Name: {{ infoMessi.name }}</p>
    <p>Age: {{ infoMessi.age }}</p>
    <p>Birthday: {{ infoMessi.birth }}</p>
    <p>Country: {{ infoMessi.country }}</p>
    <p>Ballondor: {{ infoMessi.ballondor }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

defineOptions({
  name: 'M10Component'
});

const infoMessi = inject('infoMessi');
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}
</style>
