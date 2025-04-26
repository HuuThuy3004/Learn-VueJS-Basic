<template>
  <div>
    <ChildComponent :count="count" :name="name" :isActive="isActive" :user="user"/>
    <!-- or -->
    <!-- <ChildComponent :count="count" :name="name" isActive :user="user"/> -->
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

// Type Number
let count = ref(10);
// Type String
let name = ref('John Doe');
// Type Boolean
let isActive = ref(true);
// Type Object
let user = reactive({
  name: 'Marry Smith',
  age: 30,
  nationally: 'American',
  birthday: '1995-01-01',
});

</script>

<style></style>
