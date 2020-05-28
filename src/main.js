import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用全局公共样式
import '@/styles/global.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import utils from '@/utils/index.js'
import apiService from '@/api/index.js'

Vue.prototype.$utils = utils
Vue.prototype.$apiService = apiService

if (process.env.NODE_ENV === 'development') {
  // 开发模式，使用mock
  require('@/mock')
}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
