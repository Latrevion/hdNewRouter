<script setup>
</script>

<template>
  <div class="navigation">
    <router-link  :to="{name:'home'}">首页</router-link>
    <router-link  :to="{name:'UserList'}">用户列表</router-link>
  </div>

</template>

<style lang="scss" scoped>
.navigation{
  a{
    background-color: #fff;
    text-decoration: none;
    padding: 5px 10px ;
    color:#333;
    font-weight:bold ;

    &.router-link-active {
      background-color: #f1c40f;
    }
  }
}
</style>