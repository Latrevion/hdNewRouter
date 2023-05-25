<script setup>
</script>

<template>
  <suspense>
    <div>
      <div class="lists">
        <span  v-for="route of $router.getRoutes()" :key="route.name">
          <router-link :to="{name:`${route.name}`}" v-if="route.meta?.title">
            {{route.meta.title}}
          </router-link>
        </span>
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
