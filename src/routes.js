import {createRouter, createWebHistory} from "vue-router";
import test from "@/pages/home.vue";
import about from "@/pages/about.vue";
import notf from '@/pages/404.vue'
import item from "@/pages/item.vue";

const routes = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            component:test,
        },
        {
            path: '/:id',
            component:item,
        },
        {
            path: '/about',
            component:about
        },
        {
            path: '/404',
            component:notf
        },
        {
            path: '/:CatchAll(.*)',
            component:notf
        }
    ]
})

export default routes;
