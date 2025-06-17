<script setup lang="ts">
defineProps(['news'])
</script>

<template>
  <router-link :to="`/news/${news.id}`" class="text-decoration-none text-dark">
    <div class="card h-100">
      <img :src="news.image" class="card-img-top" alt="news image" />
      <div class="card-body">
        <h5 class="card-title">{{ news.title }}</h5>
        <p class="card-text">{{ news.summary }}</p>

      </div>
    </div>
  </router-link>
</template>

<style scoped>

</style>