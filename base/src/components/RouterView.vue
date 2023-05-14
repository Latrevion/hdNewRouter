<script setup>

import {computed} from "vue"
import router from "../router/index.js"
import {url} from '../router'

let view = computed(() => {
  const route = router.routes.find(route => route.path === url.value)
  return route.component
})
</script>

<template>
  <component :is="view"></component>
</template>

<style scoped>

</style>
