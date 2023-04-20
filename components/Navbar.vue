<script lang="ts" setup></script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink :to="{ name: 'posts' }">posts</NuxtLink>
    <NuxtLink :to="{ name: 'posts-async' }">posts-async</NuxtLink>
    <NuxtLink :to="{ name: 'posts-lazyfetch' }">posts-lazyfetch</NuxtLink>
    <NuxtLink :to="{ name: 'posts-lazyasync' }">posts-lazyasync</NuxtLink>
    <NuxtLink :to="{ name: 'users' }">users</NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">users-list</NuxtLink>
    <NuxtLink :to="{ name: 'users-err' }">users-err</NuxtLink>
    <NuxtLink :to="{ name: 'state' }">state</NuxtLink>
    <NuxtLink :to="{ name: 'state-share001' }">state-share001</NuxtLink>
    <NuxtLink :to="{ name: 'state-not' }">state-not</NuxtLink>
    <NuxtLink :to="{ name: 'errSample' }">errSample</NuxtLink>
    <NuxtLink :to="{ name: 'errSample-showerr' }">errSample-showerr</NuxtLink>
    <NuxtLink to="/coupon">Coupon</NuxtLink>
    <NuxtLink to="/counter">Counter</NuxtLink>
    <NuxtLink to="/hello">Hello</NuxtLink>
    <NuxtLink to="">Hello</NuxtLink>
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>
  </nav>
</template>

<style scoped>
a {
  margin-right: 5px;
}
</style>
