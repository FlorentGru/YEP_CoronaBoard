import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import Settings from '@/pages/Settings'
import Main from '@/pages/Main'
import Country from "../pages/Country"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/dashboard'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            name: 'Main',
            component: Main,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/:country',
            name: 'Country',
            component: Country,
            meta: {
                requiresAuth: false
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser


    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router
