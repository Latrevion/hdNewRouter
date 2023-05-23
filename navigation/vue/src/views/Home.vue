<script>
export default {
  data() {
    return {
      title: "hello"
    }
  },
  beforeRouteEnter(to, from) {
    console.log('beforeRouteEnter')
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
  },
}
</script>

<template>
 Home
</template>

<style scoped>

</style>