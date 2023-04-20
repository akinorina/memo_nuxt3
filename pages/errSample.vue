<script setup>
const resetError = (error) => {
  error.value = null;
}
const someErrorLogger = (error) => {
  console.log('someErrorLogger', error)
}
</script>

<template>
  <div>
    <NuxtErrorBoundary @error="someErrorLogger">
      <NuxtPage />
      <template #error="{ error }">
        <p>{{ error }}</p>
        <button class="bg-blue-500 hover:bg-red-400 text-white rounded px-4 py-2" @click="resetError(error)">Clear
          Error</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
