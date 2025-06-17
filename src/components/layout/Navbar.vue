<script setup>

import { useSearchStore } from '@/stores/searchStore'
const searchStore = useSearchStore()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Sports', path: '/sport' },
  { name: 'Technology', path: '/technology' },
  { name: 'Bota', path: '/bota' },
  { name: 'Kultura', path: '/kultura' } ] </script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <router-link class="navbar-brand fw-bold" to="/">ZenBlog</router-link>

    <!-- Links -->
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/sport">Sports</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/technology">Technology</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/bota">Bota</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/kultura">Kultura</router-link></li>
    </ul>

    <!-- Input Kërkimi -->
    <form class="d-flex" role="search">
      <input
          v-model="searchStore.searchQuery"
          class="form-control me-2"
          type="search"
          placeholder="Kerko..."
          aria-label="Search"
      />
    </form>
  </nav>
</template>

<style>

</style>