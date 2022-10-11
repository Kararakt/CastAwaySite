<script lang="ts" setup>
import { ref } from "vue";

const activeTab = ref("1");

function Active() {
  document.getElementById("header")!.classList.toggle("active");
  document.getElementById("menu")!.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

document.onclick = function (e: any) {
  if (e.target.id !== "header" && e.target.id !== "menu") {
    document.getElementById("header")!.classList.remove("active");
    document.getElementById("menu")!.classList.remove("active");
  }
};
</script>
<template>
  <div class="container mx-auto flex items-end justify-between p-6">
    <h1 class="text-white font-bold text-4xl">Castaway</h1>
    <div id="menu" @click="Active()">
      <ul class="flex gap-[4rem]">
        <li
          @click="activeTab = '1'"
          :class="[activeTab === '1' ? 'active' : '']"
        >
          <a href="#Home">Home</a>
        </li>
        <li
          @click="activeTab = '2'"
          :class="[activeTab === '2' ? 'active' : '']"
        >
          <a href="#Episodes">Episodes</a>
        </li>
        <li
          @click="activeTab = '3'"
          :class="[activeTab === '3' ? 'active' : '']"
        >
          <a href="#About">About</a>
        </li>
        <li
          @click="activeTab = '4'"
          :class="[activeTab === '4' ? 'active' : '']"
        >
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  <div id="header" @click="Active()"></div>
</template>
