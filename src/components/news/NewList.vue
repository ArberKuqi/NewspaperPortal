<script setup>
import { ref, computed } from 'vue'
import NewsCard from '@/components/news/NewsCard.vue'

const query = ref('')

const allNews = [
  {
    id: '1',
    title: 'Kampionati Evropian 2024 nis me spektakel',
    summary: 'Gjermania hap turneun me një fitore ndaj Skocisë.',
    image: 'https://picsum.photos/400/200?random=1'
  },
  {
    id: '2',
    title: 'Festival kulturor në Prishtinë',
    summary: 'Një festival i mbushur me muzikë, art dhe traditë.',
    image: 'https://picsum.photos/400/200?random=10'
  },
  {
    id: '3',
    title: 'Ekspozitë arti në Gjakovë',
    summary: 'Artistë vendorë prezantojnë punimet e tyre.',
    image: 'https://picsum.photos/400/200?random=12'
  },
  {
    id: '4',
    title: 'Kosova barazon ndaj Suedisë',
    summary: 'Një ndeshje e fortë dhe emocionuese.',
    image: 'https://picsum.photos/400/200?random=8'
  }
]

const filteredNews = computed(() =>
    allNews.filter(n =>
        n.title.toLowerCase().includes(query.value.toLowerCase())
    )
)
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-4">📰 Te gjitha Lajmet</h2>

    <input
        v-model="query"
        type="text"
        class="form-control mb-4"
        placeholder="Kerko..."
    />

    <div class="row">
      <div
          class="col-md-4 mb-4"
          v-for="news in filteredNews"
          :key="news.id"
      >
        <NewsCard :news="news" />
      </div>
      <div v-if="filteredNews.length === 0" class="alert alert-warning text-center">
        Nuk u gjet asnj lajm
      </div>
    </div>
  </div>

</template>
<style>

</style>