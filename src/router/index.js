import Vue from 'vue'
import Router from 'vue-router'
const Layout = resolve => require(['@/components/layouts/Layout'], resolve);
const neatHome = resolve => require(['@/components/pages/neatHome'], resolve)
const neatStake = resolve => require(['@/components/pages/neatStake'], resolve)
const dashboard = resolve => require(['@/components/pages/dashboard'], resolve)
// const newWallet = resolve => require(['@/components/pages/newWallet'], resolve)
// const neatSend = resolve => require(['@/components/pages/neatSend'], resolve)

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',

        component: Layout,
        children: [{
            path: '',
            name: 'neatHome',
            component: neatHome,
            meta: []
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
        },
        // {
        //     path: '/neatSend',
        //     name: 'neatSend',
        //     component: neatSend
        // },
        {
            path: '/neatStake',
            name: 'neatStake',
            component: neatStake,
        },
        ]
    }]
})

export default router
