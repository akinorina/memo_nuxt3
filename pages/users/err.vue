<script lang="ts" setup>
const createErr = () => {
  console.log('craeteErr() runs.')
  throw createError({
    statusCode: 500,
    message: 'エラー発生',
    fatal: true,
  })
  console.log('--- ok')
}
</script>

<template>
  <div style="background-color: #fff;">
    <h1>User Index ページ</h1>
    <button class="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2" @click="createErr">エラー発生</button>
  </div>
</template>

<style scoped></style>
