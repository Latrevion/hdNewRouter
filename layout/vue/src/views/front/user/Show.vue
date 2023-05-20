<script setup>
import api from "@/api/user.js"
import {useRoute} from "vue-router"
import {reactive, ref} from "vue"

const route = useRoute()
const user = await api.find(route.params.id)

</script>

<template>
  <div class="show">
    <h2>
      {{ user.id }}
    </h2>
    <div>
      {{ user.name }}
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