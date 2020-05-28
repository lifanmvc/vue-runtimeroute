import VueRouter from 'vue-router'
import store from '@/store/index.js'
import router from '@/router/index.js'

/**
 * 创建随机码
 */
const newUuid = () => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
    ''
  )
  var len = 16
  var radix = 16
  var uuid = []
  var i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    // rfc4122, version 4 form
    var r
    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

const addNewRoute = newRoute => {
  store.dispatch('runtimeroute/setNoRefresh', false)
  store.dispatch('runtimeroute/addNewRoutes', newRoute)

  addDynamicsRoutes()
}

const addDynamicsRoutes = () => {
  // 获取动态路由数组
  const dynamicsRoutes = store.getters['runtimeroute/getRoutes']

  // 添加动态路由
  dynamicsRoutes.forEach(element => {
    insertDynamicsRoutes(element)
  })
  const allRoutes = router.options.routes

  // 清空路由
  router.matcher = new VueRouter({
    routes: []
  }).matcher

  // 更新路由
  router.options.routes = allRoutes
  router.addRoutes(allRoutes)
}

// 递归
function insertDynamicsRoutes (dynamicsRoute) {
  const routes = router.options.routes
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].name === dynamicsRoute.pName) {
      const index = routes[i].children.findIndex(
        t => t.name === dynamicsRoute.name
      )
      if (index === -1) {
        const newRoute = {
          path: dynamicsRoute.path,
          name: dynamicsRoute.name,
          component: require(`@/${dynamicsRoute.componentUrl}`).default,
          meta: dynamicsRoute.meta
        }
        routes[i].children.push(newRoute)
      }
      break
    } else if (routes.children) {
      insertDynamicsRoutes(routes.children)
    }
  }
}

export default {
  newUuid,
  addNewRoute,
  addDynamicsRoutes
}
