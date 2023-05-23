<script>
const load = async () => {
  await fetch("http://127.0.0.1:3003/article").then(r => r.json())
}

export default {
  data() {
    return {
      articles: []
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      vm.articles = await load()
    })
  },
  async beforeRouteUpdate() {
    this.articles = await load()
  }
}
</script>

<template>
  <ul>
    <li v-for="article in articles" :key="article.id">{{ article.title }}
    </li>
  </ul>
  <router-link :to="{name:'article',query:{id:Math.random()}}">下一页</router-link>
</template>

<style scoped>

</style>