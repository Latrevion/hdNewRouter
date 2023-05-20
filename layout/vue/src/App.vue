<script setup>
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <router-view></router-view>
      </div>
    </template>
  </suspense>
</template>

<style lang="scss" scoped>

.front-layout {
  background-color: #f3f3f3;
  padding: 20px;
}

</style>
