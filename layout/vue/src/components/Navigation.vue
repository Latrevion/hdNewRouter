<script setup>
</script>

<template>
  <div class="navigation">
    <router-link :to="{name:'home'}">首页</router-link>
    <router-link :to="{name:'article' } "
                 :class="{'router-link-exact-active':$route.path.includes('article')}">列表页
    </router-link>
    <router-link :to="{name:'UserList'
    }"
                 :class="{'router-link-exact-active':$route.path.includes('usershow')}"
    >用户
    </router-link>
    <router-link :to="{name:'member'}">个人中心</router-link>
  </div>

</template>

<style lang="scss">
.navigation {
  a {
    background-color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    color: #333;
    font-weight: bold;

    &.router-link-exact-active {
      background-color: #f1c40f;
    }
  }

}
</style>