<script lang="ts" setup>
const { count, inc, dec } = useCounter(100);
</script>

<template>
  <div>
    <h1>Page: counter</h1>
    <div>Count: {{ count }}</div>
    <div>
      <button @click="() => inc()">+1 増加</button>
      <button @click="() => dec()">-1 減少</button>
    </div>
  </div>
</template>

<style scoped></style>
