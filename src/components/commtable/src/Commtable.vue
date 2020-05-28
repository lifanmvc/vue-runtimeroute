<template>
  <div class="container commtable">
    <header>
      <el-form label-position="right">
        <el-form-item label="路由名称" label-width="80px">
          <el-input v-model="routeName" placeholder="请输入路由名称"></el-input>
        </el-form-item>
        <el-form-item label="组件路径" label-width="80px">
          <el-input
            v-model="componentUrl"
            placeholder="请输入组件路径"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="handleAddRoute" type="primary">添加路由</el-button>
          <el-button @click="handleGoRoute" type="primary">跳转路由</el-button>
          <el-button @click="handleAddGoRoute" type="primary"
            >加载并跳转</el-button
          >
        </el-form-item>
      </el-form>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Commtable',
  data () {
    return {
      routeName: 'newRoute',
      componentUrl: 'components/commform/index.js'
    }
  },
  created () {
    this.$router.push({ name: 'Commtable' })
  },
  methods: {
    handleAddRoute () {
      // 获取当前路由
      const matched = this.$route.matched // 包含当前路由的所有嵌套路径片段的路由记录
      const pName = matched[matched.length - 1].parent.name
      const newRoute = {
        pName,
        path: this.routeName,
        name: this.routeName,
        componentUrl: this.componentUrl,
        meta: [{ title: ['合同列表', '合同详情'] }]
      }
      // this.$store.dispatch('runtimeroute/addNewRoutes', newRoute)
      this.$utils.addNewRoute(newRoute)
    },

    // const routes = this.$router.options.routes // 获取到路由列表
    // // 父组件的路由：this.$route.matched[0].path

    // for (var i = 0; i < routes.length; i++) {
    //   if (routes[i].name === pName) {
    //     const index = routes[i].children.findIndex(
    //       t => t.name === this.routeName
    //     )
    //     if (index === -1) {
    //       const newRoute = {
    //         pName,
    //         path: this.routeName,
    //         name: this.routeName,
    //         componentUrl: this.componentUrl,
    //         meta: [{ title: ['合同列表', '合同详情'] }]
    //       }
    //       // this.$store.dispatch('runtimeroute/addNewRoutes', newRoute)
    //       this.$utils.addNewRoute(newRoute)
    //     }
    //     break
    //   }
    handleGoRoute () {
      this.$router.push({ name: this.routeName })
    },
    handleAddGoRoute () {
      this.handleAddRoute()
      this.handleGoRoute()
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.commtable {
  color: red;
}
</style>
