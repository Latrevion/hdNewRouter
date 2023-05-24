<script setup>

</script>

<template>
  <div class="link">
    <router-link :to="{name:'home'}">home</router-link>
    <router-link :to="{name:'about'}">about</router-link>
  </div>
  <div class="router-view">
  <router-view></router-view>
  </div>
</template>

<style lang="scss">
.link {
  a {
    display: inline-block;
    background-color: #16a085;
    color: #fff;
    margin-right:  10px;
    text-align: center;
    padding: 10px;
    text-decoration: none;
  }
}
.router-view{
  margin-top: 20px;
}
</style>
