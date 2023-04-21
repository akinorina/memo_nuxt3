<script lang="ts" setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 basic` : 'Nuxt 3 basic';
  },
});
</script>

<template>
  <div style="background-color: #eef;">
    <h1>Users ページ</h1>
    <NuxtPage />
    <div>Users page end</div>
  </div>
</template>

<style scoped></style>
