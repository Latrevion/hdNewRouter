<script setup>

import {computed} from "vue"
import router from "../router/index.js"

let view = computed(() => {
  const url = window.location.pathname
  const route = router.routes.find(route => route.path === url)
  return route.component
})
</script>

<template>
  <component :is="view"></component>
</template>

<style scoped>

</style>
