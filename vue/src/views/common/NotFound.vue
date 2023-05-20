<script setup>
import {useRoute} from "vue-router"
let route =useRoute()
console.log(route.params.any)
</script>

<template>
  404 您访问的页面不存在
</template>

<style scoped>

</style>