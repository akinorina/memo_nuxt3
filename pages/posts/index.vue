<script lang="ts" setup>
const { data: posts, error } = await useFetch('https://jsonplaceholder.typicode.com/posts/')
console.log('posts', posts)
console.log('error', error.value)
</script>

<template>
  <div>
    <h1>posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
