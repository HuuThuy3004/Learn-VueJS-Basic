// Create a about page
<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page.</p>
    <RouterLink to="/">Go to Home Page</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
// Component name
defineOptions({
  name: "AboutView"
});
</script>

<style scoped>
.about {
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
