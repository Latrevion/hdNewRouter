<script setup>

</script>

<template>
  <div class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss">
.card {
  header {
    background-color: #34495e;
    padding: 10px;
    color: #fff;
  }
}
</style>