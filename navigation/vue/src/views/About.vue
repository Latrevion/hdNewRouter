<script>

export default {
  data() {
    return {
      title: "hello"
    }
  },
  beforeRouteEnter(to, from) {
    console.log("beforeRouteEnter")
    // new Promise(resolve => {
    //   setTimeout(() => {
    //
    //     next(vm => vm.title = "world")
    //   }, 3000)
    // })
  },
  beforeRouteUpdate(to, from) {
    console.log(
        "beforeRouteUpdate"
    )
  },
  beforeRouteLeave(to, from) {
    console.log(
        "beforeRouteLeave"
    )
    // if (confirm("确定要离开吗？数据会丢失")) {
    //   next()
    // }
  },
}
</script>

<template>
  About-{{ title }}
</template>

<style scoped>

</style>