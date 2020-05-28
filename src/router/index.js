import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'
import utils from '@/utils/index.js'

Vue.use(VueRouter)

// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const constantRouters = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'commtable',
        name: 'Commtable',
        component: () => import('@/components/commtable/index.js')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouters
})

router.beforeEach((to, from, next) => {
  if (
    store.getters['runtimeroute/getRefresh'] &&
    store.getters['runtimeroute/getRoutes']
  ) {
    // 设置不更新路由
    store.dispatch('runtimeroute/setNoRefresh', false)

    utils.addDynamicsRoutes()
    next({ ...to, replace: true })
  } else {
    next()
  }
})

export default router
