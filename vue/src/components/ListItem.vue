<script setup>
import {ref} from "vue"
import api from "@/api/article.js"

const articles = ref(await api.all())
// const articles = ref(null)
// api.all().then(r =>{articles.value = r;console.log('app')})
</script>

<template>
  <router-link :to="`/show/${article.id}`" class="list-item" v-for="article in articles" :key="article.id" :article="article">{{ article.title }}</router-link>
<!--  <router-link :to="{name:'show',query:{id:article.id}}" class="list-item">{{ article.title }}</router-link>-->
<!--  <router-link :to="{name:'show',params:{id:article.id}}" class="list-item">{{ article.title }}</router-link>-->
</template>

<style scoped>
.list-item {
  background-color: #16a085;
  color: #fff;
  padding: 5px 10px;
  display: block;
  margin-bottom: 10px;
}
</style>
