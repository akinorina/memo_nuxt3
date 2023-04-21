<script lang="ts" setup>
const { data: posts, error } = await useAsyncData(() => $fetch('https://jsonplaceholder.typicode.com/posts/'));
// const { data: posts, error } = await useAsyncData('posts', () => {
//   console.log('$fetch()するぞー')
//   return $fetch('https://jsonplaceholder.typicode.com/posts/')
// });
console.log(useNuxtApp().payload.data);
console.log('posts', posts)
console.log('error', error.value)
</script>

<template>
  <div>
    <h1>posts一覧 by useAsyncData($fetch())</h1>
    <p v-if="error">{{ error }}</p>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
