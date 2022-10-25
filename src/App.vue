<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="h-screen z-10 flex flex-col">
    <Header class="grow" />
    <el-scrollbar wrap-class="scrollSmoothBar"
      ><RouterView></RouterView> <Footer
    /></el-scrollbar>
  </div>
</template>
