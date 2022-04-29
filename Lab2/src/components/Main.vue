<script setup lang="ts">
import { axios } from "@/plugins/axios";
import DogList from "@/components/DogList.vue";
import { ref } from "vue";

defineProps<{
  msg: string;
}>();

let breeds = ref(null as any);
let selectedBreeds = ref(null as any);

axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
  const arr = Object.keys(response.data.message).map((k) => ({
    [k]: response.data.message[k],
  }));
  breeds.value = arr.map((t) => Object.keys(t)[0]);
});

function select(breed: string) {
  if (selectedBreeds.value === null) {
    selectedBreeds.value = [breed];
    return;
  }

  if (selectedBreeds.value.find((b: string) => b === breed) === undefined) {
    selectedBreeds.value = [
      ...selectedBreeds.value.filter((b: string) => b !== breed),
      breed,
    ];
    return;
  }

  selectedBreeds.value = [
    ...selectedBreeds.value.filter((b: string) => b !== breed),
  ];
}
</script>

<template>
  <h1 class="green">Lab 2</h1>
  <div>
    <DogList
      v-bind:breeds="breeds"
      v-bind:selectedBreeds="selectedBreeds"
      :select="select"
    />
    <DogList
      v-bind:selectedBreeds="selectedBreeds"
      :select="select"
      msg="Selected breeds"
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
