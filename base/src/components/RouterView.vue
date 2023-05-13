<script setup>

import {computed} from "vue"

let view = computed(()=>{
  console.log(123456)
})
</script>

<template>
  <component :is="view"></component>
</template>

<style scoped>

</style>
