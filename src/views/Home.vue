<script setup>
import Footer from '../components/layout/Footer.vue'
import { reactive, computed } from 'vue'
import { useSearchStore } from '@/stores/searchStore'
import NewsCard from '@/components/news/NewsCard.vue'

const { searchQuery } = useSearchStore()

const allNews = reactive([
  {
    id: '1',
    title: 'Kampionati Evropian 2024 nis me spektakël',
    summary: 'Gjermania hap turneun me një fitore ndaj Skocisë.',
    image: 'https://picsum.photos/400/200?random=1',
    category: 'sport'
  },
  {
    id: '2',
    title: 'Festival kulturor në Prishtinë',
    summary: 'Një festival i mbushur me muzikë dhe traditë.',
    image: 'https://picsum.photos/400/200?random=2',
    category: 'kulture'
  },
  {
    id: '3',
    title: 'Lajme ndërkombëtare nga Evropa',
    summary: 'Zhvillime të fundit nga politika botërore.',
    image: 'https://picsum.photos/400/200?random=3',
    category: 'bota'
  },
  {
    id: '4',
    title: 'Zhvillimet në teknologji për vitin 2025',
    summary: 'AI, robotikë dhe inovacione të reja.',
    image: 'https://picsum.photos/400/200?random=4',
    category: 'technology'
  }
])

const filteredNews = computed(() => {
  if (!searchQuery) return []
  return allNews.filter(news =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchQuery.toLowerCase())
  )
})

const sportNews = computed(() => allNews.filter(n => n.category === 'sport'))
const kultureNews = computed(() => allNews.filter(n => n.category === 'kulture'))
</script>

<template>
  <div class="container py-4">
    <!-- Kërkimi -->
    <div v-if="searchQuery">
      <h4>Rezultatet për "{{ searchQuery }}"</h4>
      <div class="row">
        <div v-for="news in filteredNews" :key="news.id" class="col-md-4 mb-4">
          <NewsCard :news="news" />
        </div>
        <div v-if="filteredNews.length === 0" class="alert alert-warning text-center">
          Nuk u gjet asnje lajm.
        </div>
      </div>
    </div>

    <!-- Lajmet e rregullta -->
    <div v-else>
      <!-- Lajmet Kryesore -->
      <h4 class="mb-3">Lajmet Kryesore</h4>
      <div class="row">
        <div v-for="news in allNews.slice(0, 3)" :key="news.id" class="col-md-4 mb-4">
          <NewsCard :news="news" />
        </div>
      </div>

      <!-- Sport -->
      <h4 class="mt-5 mb-3">Sport</h4>
      <div class="row">
        <div v-for="news in sportNews" :key="news.id" class="col-md-4 mb-4">
          <NewsCard :news="news" />
        </div>
      </div>

      <!-- Kulturë -->
      <h4 class="mt-5 mb-3">Kultura</h4>
      <div class="row">
        <div v-for="news in kultureNews" :key="news.id" class="col-md-4 mb-4">
          <NewsCard :news="news" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>