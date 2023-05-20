<script setup>
import Navigation from "@/components/Navigation.vue"
</script>

<template>
  <Navigation></Navigation>
  <div class="front-layout">
    <router-view></router-view>
  </div>
</template>

<style scoped>

.front-layout {
  margin-top: 20px;
  background-color: #f3f3f3;
  padding: 20px;
}

</style>