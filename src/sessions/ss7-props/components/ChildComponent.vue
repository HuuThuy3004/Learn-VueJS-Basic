<template>
  <div>
    <p>Count: {{ props.count }}</p>
    <p>Name: {{ props.name }}</p>
    <p>IsActive: {{ props.isActive }}</p>
    <p>User-name: {{ props.user.name }}</p>
    <p>User-age: {{ props.user.age }}</p>
    <p>User-nationally: {{ props.user.nationally }}</p>
    <p>User-birthday: {{ props.user.birthday }}</p>
  </div>
</template>

<script setup>
// Cách 1:
let props = defineProps(['count', 'name', 'isActive', 'user']);
// Cách 2:
// let props = defineProps({
//   count: Number,
//   name: String,
//   isActive: Boolean,
//   user: Object,
// });
// Cách 3:
// const props = defineProps({
//   count: {
//     type: Number,
//     validator(value) {
//       return value >= 0;
//     },
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   user: {
//     type: Object,
//     default: () => ({ name: 'Khách', age: 0, nationally: 'Unknown', birthday: 'Unknown' })
//   },
// });
</script>

<style>
p {
  font-size: 1.2em;
  color: #42b983;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #42b983;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.5;
  word-spacing: 2px;
  text-indent: 20px;
  text-decoration: none;
}

p:hover {
  text-decoration: underline;
  transform: scale(1.02);
}
</style>
