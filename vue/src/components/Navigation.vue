<script setup>


</script>

<template>
  <div class="navigation">
    <router-link  :to="{name:'home'}">home</router-link>
    <router-link  :to="{name:'article'}">article</router-link>
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