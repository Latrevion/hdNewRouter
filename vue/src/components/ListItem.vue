<script setup>
defineProps({
  article: Object,
})


</script>

<template>
  <router-link :to="`/show/${article.id}`" class="list-item">{{ article.title }}</router-link>
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
