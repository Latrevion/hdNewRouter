<script setup>
</script>

<template>
  <div class="navigation">
    <router-link  :to="{name:'home'}">首页</router-link>
    <router-link  :to="{name:'article'}">列表页</router-link>
  </div>

</template>

<style lang="scss" scoped>
.navigation{
  a{
    background-color: #fff;
    text-decoration: none;
    padding: 5px 10px ;
    &.router-link-active {
      background-color: #f1c40f;
    }
  }
}
</style>