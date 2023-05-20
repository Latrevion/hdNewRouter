<script setup>

</script>

<template>
  <div class="layout-member">
    <nav>
      <router-link :to="{name:'home'}">首页</router-link>
      <router-link :to="{name:'member'}">修改手机号</router-link>
      <router-link :to="{name:'email'}">绑定邮箱</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout-member {
  display: grid;
  grid-template-columns: repeat(12,1fr);

  background-color: #f3f3f3;
  nav{
    display: flex;
    flex-direction: column;
    grid-column: span 3;
    background: #16a085;
    padding: 10px;
    a{
      color: #ffffff;
      margin-bottom: 20px;
    }
  }
  main{
    padding: 20px;
    grid-column: span 9;
  }
}
</style>