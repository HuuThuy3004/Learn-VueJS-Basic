<template>
  <!-- ---------------------- -->
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink> <br>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <!-- ---------------------- -->
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

// Component name
defineOptions({
  name: "MyComponentSs6Vue"
});
</script>

<style></style>
