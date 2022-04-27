<script setup lang="ts">
import { axios } from "@/plugins/axios";
import { watch, ref } from "vue";

defineProps<{
  msg: string;
}>();

let breeds = ref(null as any);

axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
  const arr = Object.keys(response.data.message).map((k) => ({
    [k]: response.data.message[k],
  }));
  console.log(arr);
  breeds.value = arr;
});

function changeInp(event: any) {
  if (event.target.value == "") {
    event.target.value = "Привіт незнайомець";
    return;
  } else {
    event.target.value = "Привіт " + event.target.value.replace("Привіт", "");
  }
}

function shuffle() {
  let arr = breeds.value;

  let currentIndex = arr.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  breeds.value = [...arr];
}

function add() {
  breeds.value = [...breeds.value, { "Random breeds": [] }];
}

function remove() {
  const index = Math.floor(Math.random() * breeds.value.length);
  breeds.value = breeds.value.filter((_: any, i: number) => i !== index);
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Lab 1</h1>
    <h2>Task 1</h2>
    <input v-model="msg" v-on:change="changeInp" />
    <h2>Task 2, 3</h2>
    <div>
      <ul id="breads">
        <li v-for="items in breeds" :key="items">
          {{ Object.keys(items)[0] }}
          <ul id="un__breads">
            <li v-for="item in items[Object.keys(items)[0]]" :key="item">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <button @click="remove">Remove</button>
    <button name="Add" @click="add">Add</button>
    <button name="shuffle" @click="shuffle">Shuffle</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
#un__breads li {
  color: red;
}

#breads {
  columns: 5;
}
</style>
