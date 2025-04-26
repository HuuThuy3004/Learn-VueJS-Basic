// Create a homepage
<template>
  <div class="home">
    <h1>Welcome to My Vue App</h1>
    <p>This is the home page.</p>
    <RouterLink to="/about">Go to About Page</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
// Component name
defineOptions({
  name: "HomeView"
});
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
h1 {
  font-size: 2em;
  color: #42b983;
}
p {
  font-size: 1.2em;
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
