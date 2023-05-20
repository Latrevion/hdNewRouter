<script setup>
import api from "@/api/article.js"
import {useRoute} from "vue-router"
import ListArticle from "@/components/ListArticle.vue"
import {ref, watch} from "vue"


const route = useRoute()
const article = ref()
article.value =await api.find(route.params.id)
//监听route路由信息变化，更新内容
watch(route, async ()=>{
  article.value = await api.find(route.params.id)
})


//query
// const user = await api.find(route.query.id)

// const user = ref('')
//  api.find(route.params.id).then(r =>user.value=r)
</script>

<template>
  <div class="article-show">
    <div class="show">
      <h2>
        {{ article.title }}
      </h2>
      {{ article.content }}
    </div>
    <div class="list-article">
      <list-article></list-article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-show {
  display: grid;
  grid-template-columns:repeat(6, 1fr);

  .show {
    grid-column: span 4;
    padding: 20px;
    background-color: #f3f3f3;

    div {
      color: #666;
      font-size: 0.8rem;
      line-height: 1.6rem;
    }
  }

  .list-article {
    grid-column: span 2;
  }
}
</style>