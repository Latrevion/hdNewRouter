<script setup>
// const load = async () => {
//   await fetch("http://127.0.0.1:3003/article").then(r => r.json())
// }
//
// export default {
//   data() {
//     return {
//       articles: []
//     }
//   },
//   beforeRouteEnter(to, from, next) {
//     next(async (vm) => {
//       vm.articles = await load()
//     })
//   },
//   async beforeRouteUpdate() {
//     this.articles = await load()
//   }
// }

import {ref, watch} from "vue"
import {useRoute, onBeforeRouteUpdate, onBeforeRouteLeave} from "vue-router"

const articles = ref()

const route = useRoute()
const page =  ref(route.query.page?? 1)
watch(page, async ()=>{
  articles.value = await fetch(`http://127.0.0.1:3003/article?page=${page}`).then(r => r.json())
},{immediate:true})

// watch(route, async () => {
//   if (route.name === "article") {
//     articles.value = await fetch("http://127.0.0.1:3003/article").then(r => r.json())
//   }
// }, {immediate: true})

// articles.value = await fetch("http://127.0.0.1:3003/article").then(r => r.json())
// fetch("http://127.0.0.1:3003/article")
//     .then(r => r.json())
//     .then(data => articles.value = data);

// onBeforeRouteUpdate(async () => {
//   articles.value = await fetch("http://127.0.0.1:3003/article").then(r => r.json())
// })
</script>

<template>
  <ul>
    <li v-for="article in articles" :key="article.id">{{ article.title }}
    </li>
  </ul>
<!--  <router-link :to="{name:'article',query:{id:Math.random()}}">下一页</router-link>-->
  <button @click="page=2">下一页--{{page}}</button>
</template>

<style scoped>

</style>