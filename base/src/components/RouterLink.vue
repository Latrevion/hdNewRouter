<script setup>
import {url} from '../router'
const props= defineProps({
  to:{
    type:String,
    required:true
  }
})
const push= ()=>{
  url.value = props.to
}
</script>

<template>
  <a href="#" @click.prevent="push"><slot></slot></a>
</template>

<style scoped>

</style>