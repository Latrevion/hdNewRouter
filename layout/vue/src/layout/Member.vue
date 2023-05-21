<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const links = [
  {name:'home',title:'首页'},
  {name:'member',title:'修改手机号'},
  {name:'email',title:'绑定邮箱'},
]

const push = (link)=>{
  router.push({name:link.name})
}
</script>

<template>
  <div class="layout-member">
    <nav>
<!--      <router-link :to="{name:'home'}">首页</router-link>-->
<!--      <router-link :to="{name:'member'}">修改手机号</router-link>-->
<!--&lt;!&ndash;      <router-link to="/m">修改手机号</router-link>&ndash;&gt;-->
<!--      <router-link :to="{name:'email'}">绑定邮箱</router-link>-->
      <div v-for="(link,index) in links" :key="link.name" @click="push(link)">{{link.title}}</div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout-member {
  display: grid;
  grid-template-columns: repeat(12,1fr);
  background-color: #f3f3f3;
  nav{
    display: flex;
    flex-direction: column;
    grid-column: span 3;
    background: #16a085;
    padding: 10px;
    div{
      color: #ffffff;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
  main{
    padding: 20px;
    grid-column: span 9;
  }
}
</style>