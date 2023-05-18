<script setup>
import {ref} from "vue"
import api from "@/api/user.js"
const users = ref(await api.all())
</script>

<template>
  <router-link v-for="user in users" :key="user.id" :user="user" :to="`/usershow/${user.id}`" class="list-item" >{{ user.name }}</router-link>
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
