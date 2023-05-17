<script setup>
import api from "@/api/article.js"
import {useRoute} from "vue-router"
import {reactive, ref} from "vue"

const route = useRoute()
const article = await api.find(route.params.id)

//query
// const article = await api.find(route.query.id)

// const article = ref('')
//  api.find(route.params.id).then(r =>article.value=r)
</script>

<template>
  <div class="show">
    <h2>
      {{ article.title }}
    </h2>
    <div>
      {{ article.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show {
  padding: 20px;
  background-color: #f3f3f3;

  div {
    color: #666;
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}
</style>