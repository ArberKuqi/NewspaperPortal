<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const news = ref({})
const newsId = route.params.id

onMounted(() => {
  const dummyNews = [
    {
      id: '1',
      title: 'Kampionati Evropian 2024 nis me spektakël',
      summary: 'Gjermania hap turneun me një fitore të madhe ndaj Skocisë.',
      content: 'Kjo ndeshje shënoi hapjen e një kampionati që pritet me shumë interes...',
      image: 'https://picsum.photos/600/300?random=1',
    },
    {
      id: '2',
      title: 'Kosova barazon ndaj Suedise',
      summary: 'Një ndeshje e fortë dhe emocionuese.',
      image: 'https://picsum.photos/400/200?random=8',
    },
    {
      id: '3',
      title: 'Zhvillimet e fundit në teknologji për vitin 2025',
      summary: 'AI, robotika dhe realiteti virtual do të dominojnë tregun.',
      image: 'https://picsum.photos/400/200?random=3',
    },
    {
      id: '4',
      title: 'Lajmi 4',
      summary: 'AI, robotika dhe realiteti virtual do të dominojnë tregun.',
      image: 'https://picsum.photos/400/200?random=3',
    },
    {
      id: '5',
      title: 'Lajmi 5',
      summary: 'AI, robotika dhe realiteti virtual do të dominojnë tregun.',
      image: 'https://picsum.photos/400/200?random=3',
    },
    {
      id: '6',
      title: 'Lajmi 6',
      summary: 'AI, robotika dhe realiteti virtual do të dominojnë tregun.',
      image: 'https://picsum.photos/400/200?random=3',
    }

  ]

  news.value = dummyNews.find(n => n.id === route.params.id) || {
    title: 'Lajmi nuk u gjet',
    summary: '',
    content: '',
    image: 'https://via.placeholder.com/600x300'
  }
})
</script>

<template>
  <div class="container py-4">
    <div v-if="news">
      <h2>{{ news.title }}</h2>
      <img :src="news.image" class="img-fluid mb-3" alt="news image">
      <p>{{ news.summary }}</p>
      <router-link to="/" class="btn btn-outline-secondary mt-3"> Kthehu te lajmet</router-link>
    </div>
    <div v-else class="alert alert-danger text-center">
      Lajmi nuk u gjet.
    </div>
  </div>
</template>

<style scoped>

</style>