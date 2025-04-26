<template>
  <div>
    <h1>Session 9</h1>
    <!-- FOOD -->
    <div v-if="categoryProduct === 'food'" class="list-food">
      <h2>List Food</h2>
      <div v-for="product in products" :key="product.id">
        <div v-if="product.category === categoryProduct">
          <img :src="product.img" alt="Product Image" />
          {{ product.name }} - {{ product.price }} VND
        </div>
      </div>
    </div>
    <!-- DRINK -->
    <div v-else class="list-drink">
      <h2>List Drink</h2>
      <div v-for="product in products" :key="product.id">
        <div v-if="product.category === categoryProduct">
          <img :src="product.img" alt="Product Image" />
          {{ product.name }} - {{ product.price }} VND
        </div>
      </div>
    </div>
    <!-- BUTTON -->
    <button @click="handleChangeCategory('food')" class="btn-food">Rendering Food</button>
    <button @click="handleChangeCategory('drink')" class="btn-drink">Rendering Drink</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'SessionNine'
});

const categoryProduct = ref('food');
const products = ref([
  { id: 1, name: 'Bánh bao', price: 1000, category: 'food', img: 'https://i.pinimg.com/736x/a9/28/8b/a9288b3b13eff2ed23312c9232ffceae.jpg' },
  { id: 2, name: 'Bánh mỳ', price: 2000, category: 'food', img: 'https://i.pinimg.com/736x/1d/03/63/1d0363566cf6b501716d68d71444262d.jpg' },
  { id: 3, name: 'Pepsi', price: 1500, category: 'drink', img: 'https://i.pinimg.com/736x/aa/30/f4/aa30f4c992ea0945145eaf357a074fa0.jpg' },
  { id: 4, name: 'Coca', price: 1500, category: 'drink', img: 'https://i.pinimg.com/736x/16/55/fe/1655fea865dc102408d83ca773fa8781.jpg' },
  { id: 5, name: 'Miranda', price: 1500, category: 'drink', img: 'https://i.pinimg.com/736x/49/d2/19/49d219facf49d645ede3bbd58a871744.jpg' },
  { id: 6, name: 'Bánh da lợn', price: 3500, category: 'food', img: 'https://i.pinimg.com/736x/76/e3/8e/76e38e8dbd9d844201ed16b1b6a0bd95.jpg' },
  { id: 7, name: 'Bánh bò', price: 3000, category: 'food', img: 'https://i.pinimg.com/736x/bd/09/06/bd0906e70fed1d74e53928ecddf01fd6.jpg' },
]);

const handleChangeCategory = (category) => {
  categoryProduct.value = category;
};
</script>

<style>
.btn-food {
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  ;
}

.btn-drink {
  background-color: #008CBA;
  /* Blue */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.btn-food:hover,
.btn-drink:hover {
  opacity: 0.8;
}

.btn-food:active,
.btn-drink:active {
  transform: scale(0.98);
}

.btn-food:focus,
.btn-drink:focus {
  outline: none;
}

.btn-food:focus-visible,
.btn-drink:focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

.btn-food:disabled,
.btn-drink:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-food:disabled:hover,
.btn-drink:disabled:hover {
  opacity: 1;
}

.btn-food:disabled:active,
.btn-drink:disabled:active {
  transform: none;
}

.btn-food:disabled:focus,
.btn-drink:disabled:focus {
  outline: none;
}

.btn-food:disabled:focus-visible,
.btn-drink:disabled:focus-visible {
  box-shadow: none;
}

.list-food {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.list-drink {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}

.list-food h2,
.list-drink h2 {
  color: #333;
}

.list-food div,
.list-drink div {
  margin: 5px 0;
  font-size: 16px;
}

.list-food div:hover,
.list-drink div:hover {
  background-color: #e0e0e0;
  cursor: pointer;
}

.list-food div:active,
.list-drink div:active {
  transform: scale(0.98);
}

.list-food div:focus,
.list-drink div:focus {
  outline: none;
}

.list-food div:focus-visible,
.list-drink div:focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

.list-food div:disabled,
.list-drink div:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.list-food img,
.list-drink img {
  border-radius: 5px;
}

.list-food img:hover,
.list-drink img:hover {
  transform: scale(1.05);
}

.list-food img:active,
.list-drink img:active {
  transform: scale(0.98);
}

.list-food img:focus,
.list-drink img:focus {
  outline: none;
}

.list-food img:focus-visible,
.list-drink img:focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

.list-food img:disabled,
.list-drink img:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.list-food img:disabled:hover,
.list-drink img:disabled:hover {
  opacity: 1;
}

.list-food img:disabled:active,
.list-drink img:disabled:active {
  transform: none;
}
</style>
