<script setup lang="ts">
defineProps<{
  selectedBreeds: any;
  breeds: any;
  select: any;
  msg: string;
}>();
</script>

<template>
  <div id="breeds">
    <h3>{{ msg ?? "Breeds" }}</h3>
    <div id="breeds__content">
      <div
        id="breed"
        v-for="item in breeds ?? selectedBreeds"
        :key="item"
        @click="() => select(item)"
        v-bind:class="
          selectedBreeds?.includes(item) && breeds !== undefined
            ? 'selected'
            : 'unselected'
        "
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.selected {
  border: 1px solid orange;
}

.unselected {
  border: none;
}

#breeds {
  margin: 5px;
  display: flex;
  flex-direction: column;
}

h3 {
  text-align: center;
}

#breeds__content {
  min-height: 50%;
  margin: 5px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  width: 200px;
}

#breed {
  text-align: center;
  cursor: pointer;
  color: white;
  margin: 5px;
}
</style>
