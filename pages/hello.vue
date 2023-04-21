<script lang="ts" setup>
definePageMeta({
  pageTransition: false
})

const { $hello } = useNuxtApp();
</script>

<template>
  <div>
    Page: hello
  </div>
  <div>
    {{ $hello('World') }}
  </div>
</template>

<style scoped></style>
