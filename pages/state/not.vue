<script lang="ts" setup>
const counter = ref(0);
</script>

<template>
  <div>
    <h1>useState()</h1>
    <h2>counter</h2>
    <div>
      <p>Count: {{ counter }}</p>
      <div><button @click="counter++">+</button></div>
    </div>
  </div>
</template>

<style scoped></style>
