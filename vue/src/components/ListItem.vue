<script setup>
import {ref} from "vue"
import api from "@/api/article.js"

const articles = ref(await api.all())
// const users = ref(null)
// api.all().then(r =>{users.value = r;console.log('app')})
</script>

<template>
  <router-link v-for="article in articles" :key="article.id" :article="article" :to="`/show/${article.id}`" class="list-item" >{{ article.title }}</router-link>
<!--  <router-link :to="{name:'show',query:{id:user.id}}" class="list-item">{{ user.title }}</router-link>-->
<!--  <router-link :to="{name:'show',params:{id:user.id}}" class="list-item">{{ user.title }}</router-link>-->
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
