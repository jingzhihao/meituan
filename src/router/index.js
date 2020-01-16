import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/common/Common.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/'
    },
    {
        path: '/',
        component: Common,
        children: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ('../views/home/Home.vue')
            },

        ]
    },
    {
        path: '/city',
        name: 'city',
        component: () =>
            import ('../views/city/City.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/login/Register.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router