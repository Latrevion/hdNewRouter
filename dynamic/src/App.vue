<script setup>

</script>

<template>
  <suspense>
    <div>
      <div class="lists">
        <router-link :to="{name:'home'}">home</router-link>
        <router-link :to="{name:'about'}">about</router-link>
<!--        <router-link :to="{name:'article'}">article</router-link>-->
      </div>
      <div class="router-view">
        <router-view #default="{Component,route}">
            <component :is="Component"></component>
        </router-view>
      </div>
    </div>
  </suspense>
</template>

<style lang="scss">
.lists {
  a {
    display: inline-block;
    background-color: #16a085;
    color: #fff;
    margin-right: 10px;
    text-align: center;
    padding: 10px;
    text-decoration: none;
  }
}

.router-view {
  margin-top: 20px;
}
</style>
