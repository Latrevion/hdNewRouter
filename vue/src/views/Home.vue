<script setup>
import {ref} from "vue"
import api from "../api.js"
import ListItem from "../components/ListItem.vue"

const articles = ref(await api.all())
// const articles = ref(null)
// api.all().then(r =>{articles.value = r;console.log('app')})


</script>

<template>
  <list-item v-for="article in articles" :key="article.id" :article="article"></list-item>
</template>

<style scoped>

</style>