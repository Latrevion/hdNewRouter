<script setup>

</script>

<template>
  <router-link :to="{name:'home'}">Home</router-link>
  <router-link :to="{name:'about'}">About</router-link>

  <div class="view">

  <router-view></router-view>
  </div>
</template>

<style lang="scss">
a{
  display: inline-block;
  color: #fff;
  background-color: #e67e22;
  padding: 10px;
}
.view{
  background-color: #f3f3f3;
  padding: 20px;
  margin-top: 20px;
}


</style>
