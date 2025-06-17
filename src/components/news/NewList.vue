<script setup lang="ts">
defineProps(['newsList'])
</script>

<template>
  <div class="row">
    <div class="col-md-6 mb-3" v-for="(item, i) in newsList" :key="i">
      <div class="d-flex">
        <img :src="item.image" alt="news" class="me-3" width="100" height="60" />
        <div>
          <h6 class="mb-1">{{ item.title }}</h6>
          <p class="mb-0 small text-muted">{{ item.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>