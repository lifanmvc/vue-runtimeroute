<template>
  <div class="container home">
    <header>
      <el-form label-position="right">
        <el-form-item>
          <el-button @click="handleGoRoute" type="primary"
            >加载表格页面</el-button
          >
        </el-form-item>
        <el-form-item>
          {{ this.$store.getters['runtimeroute/getRoutes'] }}
        </el-form-item>
      </el-form>
    </header>
    <el-divider content-position="left">下面是子路由</el-divider>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      routeName: 'newRoute',
      componentUrl: 'components/commform/index.js'
    }
  },
  created () {
    var route = this.$route.matched
    console.log('route', route)
  },
  methods: {
    handleAddRoute () {
      // 获取当前路由

      const routes = [
        {
          path: 'test',
          name: this.routeName,
          component: require(`@/${this.componentUrl}`).default
        }
      ]
      this.$router.addRoutes(routes)
    },
    handleAddToChildRoute () {
      // const curPath = this.$route.path
      // const matched = this.$route.matched
      // his.$router.options 获取到路由列表

      // // 父组件的路由：this.$route.matched[0].path

      // console.log(curPath)
      // console.log(matched)

      this.$router.push({ name: 'About' })
    },
    handleGoRoute () {
      // this.$router.push({ name: this.routeName })
      this.$router.push({ name: 'Commtable' })
    }
  },
  components: {}

  // 在addroutes前，使用router.options.routes=XXXXX的方法手动添加
  //   this.$router.options.routes[0].children.push({//插入路由
  // name:'list',
  // path: 'list',
  // component: resolve => require(['../template/list.vue'], resolve)//将组件用require引进来
  // });
  // this.$router.addRoutes(this.$router.options.routes);//调用a
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  padding: 10px;
  > section {
    border: 1px solid green;
    flex: 1;
  }
}
</style>
