const routes = [
    {
        path: '/',
        name: 'AppLayout',
        component: () => import('../layout/AppLayout.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/views/Login.vue')
    }
]

export default routes;