<script setup>
import { reactive, computed } from 'vue'

const allNews = reactive([
  {
    id: '1',
    title: 'Festival kulturor në Prishtinë',
    summary: 'Një festival i mbushur me muzikë, art dhe kulturë tradicionale.',
    category: 'kulture',
    image: 'https://picsum.photos/400/200?random=10'
  },
  {
    id: '2',
    title: 'Ndeshje e fortë në Ligën e Kampionëve',
    summary: 'Ndeshje ndërmjet ekipeve më të mëdha evropiane.',
    category: 'sport',
    image: 'https://picsum.photos/400/200?random=11'
  },
  {
    id: '3',
    title: 'Ekspozitë arti në Gjakovë',
    summary: 'Artistë nga i gjithë vendi prezantojnë punimet e tyre.',
    category: 'kulture',
    image: 'https://picsum.photos/400/200?random=12'
  },
  {
    id: '4',
    title: 'Robotë në panairin e teknologjisë',
    summary: 'Panairi i teknologjisë solli robotë inteligjentë dhe pajisje të reja.',
    category: 'teknologji',
    image: 'https://picsum.photos/400/200?random=13'
  },
  {
    id: '5',
    title: 'Koncert klasik në Teatrin Kombëtar',
    summary: 'Një mbrëmje magjike me muzikë klasike nga artistë vendorë dhe ndërkombëtarë.',
    category: 'kulture',
    image: 'https://picsum.photos/400/200?random=14'
  },
  {
    id: '6',
    title: 'Panairi i librit në qytetin e vjetër',
    summary: 'Autorë dhe lexues takohen për të festuar literaturën dhe kulturën.',
    category: 'kulture',
    image: 'https://picsum.photos/400/200?random=15'
  },
  {
    id: '7',
    title: 'Panairi i librit në qytetin e vjetër',
    summary: 'Autorë dhe lexues takohen për të festuar literaturën dhe kulturën.',
    category: 'kulture',
    image: 'https://picsum.photos/400/200?random=15'
  },
  {
    id: '8',
    title: 'Panairi i librit në qytetin e vjetër',
    summary: 'Autorë dhe lexues takohen për të festuar literaturën dhe kulturën.',
    category: 'kulture',
    image: 'https://picsum.photos/400/200?random=15'
  }
])

const kultureNews = computed(() => {
  return allNews.filter(news => news.category === 'kulture')
})
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-4"> Lajmet Kulturore</h2>
    <div class="row">
      <div
          class="col-md-4 mb-4"
          v-for="news in kultureNews"
          :key="news.id"
      >
        <div class="card h-100 shadow-sm">
          <img :src="news.image" class="card-img-top" :alt="news.title" />
          <div class="card-body">
            <h5 class="card-title">{{ news.title }}</h5>
            <p class="card-text">{{ news.summary }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>