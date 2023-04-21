<script lang="ts" setup>
// ID.
const router = useRoute();
console.log('id:', router.params.id)

useHead({
  title: 'User ID:' + router.params.id,
  meta: [
    { name: 'description', content: 'User ID:' + router.params.id },
  ],
});
</script>

<template>
  <div style="background-color: #fff;">
    <h1>User ID. {{ $route.params.id }} ページ</h1>
  </div>
</template>

<style scoped></style>
