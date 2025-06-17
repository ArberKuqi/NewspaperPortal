<script setup lang="ts">

</script>

<template>
  <div class="container py-4">
    <h2 class="mb-4">Lajmet nga Bota</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="news in newsList" :key="news.id">
        <NewsCard :news="news" />
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>