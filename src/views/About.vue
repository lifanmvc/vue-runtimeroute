<template>
  <div>
    子路由
  </div>
</template>

<script>
export default {
  created () {
    const curPath = this.$route.path
    const matched = this.$route.matched

    const options = this.$router.options // 获取到路由列表
    // 父组件的路由：this.$route.matched[0].path

    console.log(curPath)
    console.log(matched)
    console.log(options)
    console.log(this.$route.matched[0].path)
  }
}
</script>

<style lang="scss" scoped></style>
