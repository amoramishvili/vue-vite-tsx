import { createRouter as createVueRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.tsx'),
    meta: {},
  },
];

const createRouter = (): Router => {
  const router = createVueRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
};

export default createRouter;
