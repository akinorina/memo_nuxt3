<script lang="ts" setup>
const show = ref(false);

const handleClick = () => {
  show.value = true;
}
</script>

<template>
  <div>
    <h1>Page: coupon</h1>
    <button @click="handleClick">Coupon Get</button>
    <coupon v-if="show" />
  </div>
</template>

<style scoped></style>
