import { createRouter, createWebHistory } from 'vue-router';

import Catalog from '@/components/views/catalog/vue/Catalog.vue';

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/bin',
    component: () => import('@/components/views/bin/vue/Bin.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
});

export default router;
