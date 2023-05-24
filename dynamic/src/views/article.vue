<!--<script setup>-->
<!--import {ref, watch} from "vue"-->
<!--import {useRoute} from "vue-router"-->

<!--const route = useRoute()-->
<!--const lists = ref({})-->
<!--const article = ref({})-->

<!--lists.value = await fetch("http://127.0.0.1:3003/article").then(r => r.json())-->

<!--watch(() => route.query, async (newQuery) => {-->
<!--  article.value= await fetch(`http://127.0.0.1:3003/article/${newQuery.id ?? 1}`).then(r => r.json())-->
<!--}, {immediate: true})-->
<!--</script>-->

<!--<template>-->
<!--  <div class="page">-->
<!--    <div>-->
<!--      <h2>{{article.title}}</h2>-->
<!--      <p>-->
<!--      {{ article.content }}-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="lists">-->
<!--      <router-link :to="{name:'article',query:{id:article.id}}" v-for="article in lists" :key="article.id">-->
<!--        {{ article.title }}-->
<!--      </router-link>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss" scoped>-->
<!--.page {-->
<!--  display: flex;-->

<!--  .lists {-->
<!--    min-width: 300px;-->
<!--    margin-left: 20px;-->
<!--    a {-->
<!--      font-size: .8rem;-->
<!--      display: block;-->
<!--      background-color: #17a085;-->
<!--      color: #ffffff;-->
<!--      margin-bottom: 10px;-->
<!--      padding: 5px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->

<script setup>

</script>

<template>
  <div class="page">
    <h2>Article ----Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sapiente.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et facere laborum nemo neque omnis quo
      voluptates! Aliquid consectetur cumque dicta dignissimos doloribus expedita explicabo laudantium minus nemo
      nesciunt nisi, perferendis quae quia repellendus sit suscipit velit voluptatibus. Ab eveniet expedita illo nam
      officia sapiente voluptates? Distinctio quod repellat veritatis vero. Aliquam aliquid aspernatur, culpa cupiditate
      dicta dolorum earum eligendi excepturi facilis, fugiat id impedit incidunt ipsum minima nemo nesciunt nisi odit
      omnis? Facere molestias nobis ut. Delectus fuga perferendis vitae voluptatibus. Adipisci, amet at debitis
      doloribus ducimus ea eveniet ex excepturi exercitationem harum hic id illum in iste mollitia natus nemo obcaecati
      odit perferendis quae qui quia quidem quis quisquam quod, ratione recusandae repellat reprehenderit repudiandae
      sapiente sunt ullam voluptas voluptatem. Asperiores beatae, commodi consequatur cumque cupiditate debitis,
      dignissimos dolores eum facere fugiat illo ipsa iure, libero magnam magni maxime modi nihil non numquam odio
      officiis placeat quam quisquam ratione reiciendis repellat repudiandae velit voluptates voluptatibus voluptatum.
      Cum dicta exercitationem facere nihil possimus repellat rerum temporibus totam! Beatae consequuntur corporis,
      deserunt earum nam odio perspiciatis soluta totam? Blanditiis culpa cumque esse ipsa libero odio quod similique
      tempore. Aut blanditiis debitis impedit libero quibusdam quod reiciendis rem sunt tenetur unde.</p>
    <div id="home">hv</div>
  </div>
</template>

<style scoped>

</style>