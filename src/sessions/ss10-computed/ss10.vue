<template>
  <div>
    <h1>Session 10</h1>
    <!-- BUTTON -->
    <button @click="handleChangeCategory('iphone')" class="btn-iphone">Iphone</button>
    <button @click="handleChangeCategory('laptop')" class="btn-laptop">Laptop</button>
    <!-- CONDITIONAL -->
    <div v-if="categoryProduct === 'iphone'" class="list-iphone"><h2>List Iphone</h2></div>
    <div v-if="categoryProduct === 'laptop'" class="list-laptop"><h2>List Laptop</h2></div>
    <!-- RENDER -->
    <div v-for="product in productFilter" :key="product.id" class="group-product">
      <div class="product">
        <img :src="product.img"/>
        <h2>Name: {{ product.name }}</h2>
        <p>Category: {{ product.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

defineOptions({
  name: 'SessionTen'
});

const categoryProduct = ref('');
const products = ref([
  { id: 1, name: 'Iphone 7', category: 'iphone', img: 'https://i.pinimg.com/474x/61/43/7e/61437e16ea05c75b79d8b91cbd009e35.jpg' },
  { id: 2, name: 'Iphone 11', category: 'iphone', img: 'https://i.pinimg.com/474x/9b/a5/5a/9ba55a9ae34bd1e491741ad470dc7436.jpg' },
  { id: 3, name: 'Iphone 14', category: 'iphone', img: 'https://i.pinimg.com/474x/f3/52/0e/f3520e2330f83dc497e10b89c7a60bc0.jpg' },
  { id: 4, name: 'Iphone 15', category: 'iphone', img: 'https://i.pinimg.com/474x/8e/1c/37/8e1c3744a4f11b8a6d5d053c59e9a75c.jpg' },
  { id: 5, name: 'Laptop Asus', category: 'laptop', img: 'https://i.pinimg.com/736x/90/40/9d/90409d9e2b95e2edba6a20e033d3cdd3.jpg' },
  { id: 6, name: 'Laptop Dell', category: 'laptop', img: 'https://i.pinimg.com/736x/f6/ab/cf/f6abcff92645e966328a54e421ba4ccb.jpg' },
  { id: 7, name: 'Laptop Acer', category: 'laptop', img: 'https://i.pinimg.com/736x/63/26/50/632650d4a548158dfc3120f93ca95ce1.jpg' },
]);

const handleChangeCategory = (category) => {
  categoryProduct.value = category;
};

const productFilter = computed(() => {
  return products.value.filter((product) => product.category === categoryProduct.value);
});
</script>

<style scoped>
.group-product {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 20px;
}

.product {
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.product img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.btn-iphone {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-laptop {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-iphone:hover,
.btn-laptop:hover {
  opacity: 0.8;
}

.btn-iphone:active,
.btn-laptop:active {
  transform: scale(0.95);
}

.btn-iphone:focus,
.btn-laptop:focus {
  outline: none;
}

.btn-iphone:focus-visible,
.btn-laptop:focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

.btn-laptop:focus-visible {
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.5);
}

.list-iphone {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
}

.list-laptop {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
}

.list-iphone h2,
.list-laptop h2 {
  font-size: 1.5em;
  color: #343a40;
}
.list-iphone p,
.list-laptop p {
  font-size: 1.2em;
  color: #6c757d;
}
.list-iphone img,
.list-laptop img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.list-iphone .product,
.list-laptop .product {
  margin: 10px;
}
.list-iphone .product img,
.list-laptop .product img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
