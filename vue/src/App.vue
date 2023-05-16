<script setup>

</script>

<template>
  <suspense>
    <template #default>
      <div>
        <router-link :to="{name:'home'}">home</router-link>
        |
        <router-link :to="{name:'article'}">article</router-link>
        <br>
        <router-view></router-view>
      </div>
    </template>
  </suspense>
</template>

<style scoped>

</style>
