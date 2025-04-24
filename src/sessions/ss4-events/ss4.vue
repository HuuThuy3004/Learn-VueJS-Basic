<template>
    <div>
        <h2>ss4</h2>
        <p>Count: {{ count }}</p>
        <button @click="increase">Increase</button> <br>
        <!-- <button v-on:click="increase">Increase</button> -->
        <form @submit.prevent="submitForm">
            <input type="text" v-model="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

let count = ref(0);
let name = ref("");

let increase = () => {
    count.value++;
};

let submitForm = (e) => {
    e.preventDefault();
    // alert(`Hello ${name.value}`);
    console.log(`Hello ${name.value}`);
};
</script>

<style></style>