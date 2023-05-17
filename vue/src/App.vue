<script setup>
import Navigation from "./components/Navigation.vue"
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <Navigation class='navigation'></Navigation>
        <router-view></router-view>
      </div>
    </template>
  </suspense>
</template>

<style lang="scss" scoped>
.navigation{
  margin-bottom: 20px;
  a{
    margin-right: 20px;
  }
}
</style>
