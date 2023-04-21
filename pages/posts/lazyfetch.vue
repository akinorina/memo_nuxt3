<script lang="ts" setup>
const { data: posts, error, pending } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts/')
console.log('posts', posts)
console.log('error', error.value)
</script>

<template>
  <div>
    <h1>posts一覧 with useLazyFetch()</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading</p>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
