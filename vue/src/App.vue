<script setup>
import Navigation from "./components/Navigation.vue"
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <Navigation class='navigation'></Navigation>
<!--        <div class="router-view">-->
<!--          <router-view></router-view>-->
<!--        </div>-->
        <router-view #default="{route,Component}">
          <div class="router-view">
            <component :is="Component"></component>
          </div>
        </router-view>
      </div>
    </template>
  </suspense>
</template>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
}

.router-view {
  background-color: #f3f3f3;
  padding: 20px;
}

</style>
