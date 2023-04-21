<script setup>
import { createCompilerError } from '@vue/compiler-core';

const counter = ref(0)
const inc = () => {
  // throw createError('エラー発生')
  throw createError({
    statusCode: '400',
    statusMessage: 'Bad Request',
    message: 'エラー発生',
  })
  counter.value++
};
</script>

<template>
  <div>
    <h1>Error handling sample</h1>
    <p>Count: {{ counter }}</p>
    <div>
      <button class="bg-gray-500 hover:bg-red-400 text-white rounded px-4 py-2" @click="inc">+</button>
    </div>
  </div>
</template>

<style scoped></style>
