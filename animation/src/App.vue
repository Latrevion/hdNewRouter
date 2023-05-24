<script setup>

</script>

<template>
  <div class="link">
    <router-link :to="{name:'home'}">home</router-link>
    <router-link :to="{name:'about'}">about</router-link>
  </div>
  <div class="router-view">
    <router-view #default="{Component}">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-enter-active {
  transition: all 1s ease;
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-from {
  transform: translateX(0);

}

.fade-leave-active {
  transition: all 1s ease;
}

.fade-leave-to {
  transform: translateX(-100%);

}


.link {
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
