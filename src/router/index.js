import { createRouter, createWebHistory } from 'vue-router';

import Catalog from '@/components/views/Catalog.vue';

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/bin',
    component: () => import('@/components/views/Bin.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
});

export default router;
