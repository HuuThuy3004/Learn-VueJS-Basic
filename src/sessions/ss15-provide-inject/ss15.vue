<template>
  <div>
    <h1>Session15</h1>
    <div class="soccer">
      <Messi />
      <span>VS</span>
      <Ronaldo />
    </div>
    <div class="soccer">
      <p>{{ ratio1 }}</p>
      <span>-</span>
      <p>{{ ratio2 }}</p>
    </div>
    <div class="soccer">
      <button @click="btnClick">Click</button>
    </div>
    <div class="soccer">
      <p style="color: red;">{{ best }}</p>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import Messi from './components/messi.vue';
import Ronaldo from './components/ronaldo.vue';

defineOptions({
  name: 'Session15Component'
});

// Information of the players
const infoMessi = ref({
  name: 'Lionel Messi',
  age: 36,
  country: 'Argentina',
  birth: '24/06/1987',
  ballondor: 8
});

const infoRonaldo = ref({
  name: 'Cristiano Ronaldo',
  age: 38,
  country: 'Portugal',
  birth: '05/02/1985',
  ballondor: 5
});

provide('infoMessi', infoMessi);
provide('infoRonaldo', infoRonaldo);


// Ratio
const ratio1 = ref(0);
const ratio2 = ref(0);
const best = ref('');

const btnClick = () => {
  ratio1.value = Math.round(Math.random() * 10);
  ratio2.value = Math.round(Math.random() * 10);
  if (ratio1.value > ratio2.value) {
    best.value = 'Messi is the best';
  } else if (ratio1.value < ratio2.value) {
    best.value = 'Ronaldo is the best';
  } else {
    best.value = 'Both are the best';
  }
};

</script>

<style scoped>
.soccer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.soccer span {
  font-size: 50px;
  font-weight: bold;
}

.soccer p {
  font-size: 50px;
  font-weight: bold;
}

.soccer button {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  background-color: burlywood;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
