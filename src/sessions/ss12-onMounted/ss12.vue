<template>
  <div>
    <h1>Session12</h1>
    <h2>List todos</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }} - {{ todo.completed ? 'Completed' : 'Not Completed' }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const todos = ref([]);

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => todos.value = json)
      .catch(error => console.error('Error fetching todos:', error));
});

defineOptions({
  name: 'Session12Component'
});
</script>

<style scoped>
h2 {
  color: #35495e;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
li:last-child {
  border-bottom: none;
}
li.completed {
  text-decoration: line-through;
}
li:not(.completed) {
  color: #42b983;
}
li.completed {
  color: #ccc;
}
</style>
