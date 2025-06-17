<script setup >
import NewsCard from '../../components/news/NewsCard.vue'

const sportNews = [
  {
    id: '1',
    title: 'Kampionati Evropian 2024 nis me spektakël',
    summary: 'Gjermania hap turneun me një fitore të madhe ndaj Skocisë.',
    image: 'https://picsum.photos/400/200?randofm=1',
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
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-4">🏆 Lajmet Sportive</h2>
    <div class="row">
      <NewsCard
          v-for="(news, index) in sportNews"
          :key="index"
          :news="news"
          class="col-md-4 mb-4"
      />
    </div>
  </div>

</template>

<style scoped>

</style>