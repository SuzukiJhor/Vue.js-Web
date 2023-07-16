import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home.vue'
import Videos from '@/pages/Videos.vue'

const routes = [
    {
        path: '/',
        component:Home
    },
    {
        path: '/videos',
        component:Videos
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;