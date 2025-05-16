<script setup lang="ts">
</script>

<template>
  <div class="h-main">
    <div class="h-sidebar">
      1111
    </div>
    <div class="h-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.h-main{
  width: 100%;
  height: 100vh;
  display: flex;
}
.h-sidebar{
  max-width: 150px;
  background-color: darksalmon;
}
.h-center{
  height: 100%;
  width: 100%
}
</style>
