<script setup>
import Navigation from "@/components/Navigation.vue"
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <Navigation class='navigation'></Navigation>
<!--        <div class="router-view">-->
<!--          <router-view></router-view>-->
<!--        </div>-->

          <div class="front-layout">
            <router-view />
          </div>

      </div>
    </template>
  </suspense>
</template>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
}

.front-layout {
  background-color: #f3f3f3;
  padding: 20px;
}

</style>
