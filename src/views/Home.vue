<script setup>
import NewsCard from '../components/news/NewsCard.vue'
import NewsList from '../components/news/NewList.vue'

import {reactive, computed, ref} from 'vue'
import {useSearchStore} from "@/stores/searchStore.js";

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
    summary: 'Një festival i mbushur me muzikë, art dhe traditë.',
    image: 'https://picsum.photos/400/200?random=10',
    category: 'kulture'
  },
  {
    id: '3',
    title: 'Ekspozitë arti në Gjakovë',
    summary: 'Artistë vendorë prezantojnë punimet e tyre.',
    image: 'https://picsum.photos/400/200?random=12',
    category: 'kulture'
  },
  {
    id: '4',
    title: 'Kosova barazon ndaj Suedisë',
    summary: 'Një ndeshje e fortë dhe emocionuese.',
    image: 'https://picsum.photos/400/200?random=8',
    category: 'sport'
  }
])

const sportNews = computed(() =>
    allNews.filter(news => news.category === 'sport')
)

const kultureNews = computed(() =>
    allNews.filter(news => news.category === 'kulture')
)
</script>

<template>
  <div class="container py-4">
    <!-- Kërkimi -->
    <div class="mb-5">
      <input
          v-model="searchQuery"
          class="form-control"
          type="text"
          placeholder="🔍 Kërko lajm..."
      />
    </div>

    <!-- Rezultatet nga kërkimi -->
    <div v-if="searchQuery">
      <h4 class="mb-3">Rezultatet për "{{ searchQuery }}"</h4>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="news in filteredNews" :key="news.id">
          <NewsCard :news="news" />
        </div>
        <div v-if="filteredNews.length === 0" class="alert alert-warning text-center w-100">
          ❗ Nuk u gjet asnjë lajm për “{{ searchQuery }}”
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
          🎭 Kulturë
          <router-link to="/kultura" class="btn btn-sm btn-outline-primary">Shiko më shumë</router-link>
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