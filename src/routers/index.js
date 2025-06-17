import { createRouter, createWebHistory } from 'vue-router'

// Views
import Home from '../views/Home.vue'
import Sport from '../views/categories/Sports.vue'
import Technology from '../views/categories/Technology.vue'
import NotFound from '../views/NotFound.vue'
import Bota from "@/views/categories/Bota.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sport', name: 'Sport', component: Sport },
    { path: '/technology', name: 'Technology', component: Technology },
    { path: '/bota', name: 'Bota', component: Bota },
    { path: '/kultura', name: 'Kultura', component: () => import('../views/categories/Kultura.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/news/:id', name: 'NewsDetail', component: () => import('../components/news/NewsDetail.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router