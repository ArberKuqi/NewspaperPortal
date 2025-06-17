<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const news = ref({})

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
      title: 'Rritet çmimi i naftës në tregjet botërore',
      summary: 'Analistët presin ndikim të ndjeshëm në ekonomitë e Ballkanit.',
      content: 'Çmimet e naftës po rriten për shkak të krizave globale...',
      image: 'https://picsum.photos/600/300?random=2',
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
    <h2 class="mb-3">{{ news.title }}</h2>
    <img :src="news.image" class="img-fluid mb-3" alt="Lajmi" />
    <p class="lead">{{ news.summary }}</p>
    <p>{{ news.content }}</p>
  </div>
</template>

<style scoped>

</style>