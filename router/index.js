import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        // component: Home
        component: () => import('../views/Main.vue'),
        // 嵌套路由
        // 注意 chilen 里的路由路径 path 带 “/” 和不带 “/” 的区别
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('../views/home')
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: () => import('../views/User')
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: () => import('../views/mall')
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component: () => import('../views/other/pageOne.vue')
            // },
            // {
            //     path: '/page2',
            //     name: 'page2',
            //     component: () => import('../views/other/pageTwo.vue')
            // }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/login.vue')
    }
    
]

// 创建并暴露路由器
// export default new VueRouter({
//     mode: 'history',
//     routes
// })

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
