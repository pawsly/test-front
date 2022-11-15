import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/MainPage.vue'),
    },
    {
        path: '/ml',
        name: 'ml',
        component: () => import('../components/ML.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
