<script setup>
defineProps({
  article: Object,
})


</script>

<template>
<div class="list-item">{{article.title}}</div>
</template>

<style scoped>
.list-item{
background-color: #16a085;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
}
</style>
