<script lang="ts" setup>
const error = useError()
</script>

<template>
  <NuxtLayout>
    <div class="bg-red-600" style="width: 600px; height: 400px;">
      <h1>ERROR.VUE</h1>
      <p>{{ error }}</p>
      <button class="bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2"
        @click="clearError({ redirect: '/' })">clear Error</button>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
