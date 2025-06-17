<script setup>
import NewsCard from '../components/news/NewsCard.vue'
import NewsList from '../components/news/NewList.vue'
import Footer from '../components/layout/Footer.vue'

import {reactive, computed, ref} from 'vue'
import {useSearchStore} from "@/stores/searchStore.js";

const searchStore = useSearchStore()

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
    summary: 'Një festival i mbushur me muzikë, art dhe traditë.',
    image: 'https://picsum.photos/400/200?random=10',
    category: 'kulture'
  },
  {
    id: '3',
    title: 'Lajmet më të fundit nga bota',
    summary: 'Konfliktet globale, diplomacia dhe politika.',
    image: 'https://picsum.photos/400/200?random=15',
    category: 'bota'
  },
  {
    id: '4',
    title: 'Zhvillimet teknologjike 2025',
    summary: 'AI, robotikë dhe inovacion.',
    image: 'https://picsum.photos/400/200?random=17',
    category: 'technology'
  }
])

const filteredNews = computed(() => {
  if (!searchStore.searchQuery) return []
  return allNews.filter(news =>
      news.title.toLowerCase().includes(searchStore.searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchStore.searchQuery.toLowerCase())
  )
})

const sportNews = computed(() =>
    allNews.filter(news => news.category === 'sport')
)

const kultureNews = computed(() =>
    allNews.filter(news => news.category === 'kulture')
)
</script>

<template>
  <div class="container py-4">
    <div v-if="searchStore.searchQuery">
      <div class="row">
        <div v-for="news in filteredNews" :key="news.id" class="col-md-4 mb-4">
          <NewsCard :news="news" />
        </div>
        <div v-if="filteredNews.length === 0" class="alert alert-warning text-center">
          Nuk u gjete asnje lajm.
        </div>
      </div>
    </div>

    <!-- Nëse nuk ka kërkim, shfaq normalisht -->
    <div v-else>
      <!-- Lajmet Kryesore -->
      <h4 class="mb-3 d-flex justify-content-between align-items-center">
        📰 Lajmet Kryesore
        <router-link to="/news" class="btn btn-sm btn-outline-primary">Shiko të gjitha</router-link>
      </h4>
      <div class="row justify-content-start">
        <div
            class="col-md-4 mb-4"
            v-for="news in allNews.slice(0, 3)"
            :key="news.id"
        >
          <NewsCard :news="news" />
        </div>
      </div>

      <!-- Sport -->
      <div v-if="sportNews && sportNews.length > 0">
        <h4 class="mt-5 mb-3 d-flex justify-content-between align-items-center">
          🏟 Sport
          <router-link to="/sport" class="btn btn-sm btn-outline-primary">Shiko më shumë</router-link>
        </h4>
        <div
            class="row"
            :class="sportNews.length === 1 ? 'justify-content-center' : 'justify-content-start'"
        >
          <div
              class="col-md-4 mb-4"
              v-for="news in sportNews.slice(0, 2)"
              :key="news.id"
          >
            <NewsCard :news="news" />
          </div>
        </div>
      </div>

      <!-- Kulturë -->
      <div v-if="kultureNews && kultureNews.length > 0">
        <h4 class="mt-5 mb-3 d-flex justify-content-between align-items-center">
          Kultura
          <router-link to="/kultura" class="btn btn-sm btn-outline-primary">Shiko me shume</router-link>
        </h4>
        <div
            class="row"
            :class="kultureNews.length === 1 ? 'justify-content-center' : 'justify-content-start'"
        >
          <div
              class="col-md-4 mb-4"
              v-for="news in kultureNews.slice(0, 2)"
              :key="news.id"
          >
            <NewsCard :news="news" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>