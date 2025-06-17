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
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/">NewsPortal</router-link>

      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/sport">Sport</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/kultura">Kultura</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/technology">Technology</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/bota">Bota</router-link></li>
          <li class="nav-item"><router-link to="/news" class="nav-link">Gjitha lajmet</router-link></li>
        </ul>

        <!-- Kërkimi -->
        <form class="d-flex" @submit.prevent="onSearch">
          <input
              v-model="searchStore.searchQuery"
              class="form-control me-2"
              type="search"
              placeholder="Kërko..."
          />
          <button class="btn btn-outline-light" type="submit">Kerko</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style>

</style>