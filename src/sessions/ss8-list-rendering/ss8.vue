<template>
  <div>
    <h1>List Rendering</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        Name: {{ item.name }} - Price: {{ item.price }}
      </li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'ListRenderingComponent'
});

let items = ref([
  { id: 1, name: 'Pizza', price: 100000 },
  { id: 2, name: 'Bugger', price: 200000 },
  { id: 3, name: 'Chicken rice', price: 300000 }
]);
</script>

<style></style>
