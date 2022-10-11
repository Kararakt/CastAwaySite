<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import { ElScrollbar } from "element-plus";

const ScrollBar = ref<InstanceType<typeof ElScrollbar>>();
const ScrollToTop = () => {
  ScrollBar.value!.setScrollTop(0);
};
</script>

<template>
  <div class="h-screen z-10 flex flex-col">
    <Header @click="ScrollToTop" ref="ScrollBar" class="grow" />
    <el-scrollbar wrap-class="scrollSmoothBar"
      ><RouterView></RouterView> <Footer
    /></el-scrollbar>
  </div>
</template>
