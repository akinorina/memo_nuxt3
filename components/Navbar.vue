<script lang="ts" setup></script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink :to="{ name: 'users' }">users</NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">users-list</NuxtLink>
    <NuxtLink to="/coupon">Coupon</NuxtLink>
    <NuxtLink to="/counter">Counter</NuxtLink>
    <NuxtLink to="/hello">Hello</NuxtLink>
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>
  </nav>
</template>

<style scoped>
a {
  margin-right: 5px;
}
</style>
