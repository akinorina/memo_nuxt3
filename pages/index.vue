<script lang="ts" setup>
const { data } = useFetch('/api/hello')
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <p>{{ data }}</p>
  </div>
</template>

<style scoped></style>
