<script setup>
import {ref} from "vue"

const lists = ref()

lists.value = await fetch("http://127.0.0.1:3003/article").then(r => r.json())

</script>

<template>
  <div class="page">
    <div class="lists">
      <router-link :to="{name:'article',query:{id:article.id}}" v-for="article in lists" :key="article.id">
        {{ article.title }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.page {
  .lists {
    a {
      display: block;
      background-color: #17a085;
      color: #ffffff;
      margin-bottom: 10px;
      padding: 5px;
    }
  }
}
</style>