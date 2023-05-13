<script setup>

import RouterViews from "./components/RouterView.vue"


</script>

<template>
  <a href="/">home</a>
  <a href="/about">about</a>
  <hr>
<router-views></router-views>
</template>

<style scoped>
a{
  display: inline-block;
  margin-left: 20px;
}
</style>
