//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/views/HomeIndex.vue')
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/posts/PostIndex.vue')
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/posts/PostCreate.vue')
    },
    {
        path: '/posts/edit/:id',
        name: 'posts.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/posts/PostEdit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router