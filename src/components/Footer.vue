<script lang="ts" setup>
const items = [
  {
    id: 1,
    src: "/src/assets/spotify_logo.png",
  },
  {
    id: 2,
    src: "/src/assets/linked_logo.png",
  },
  {
    id: 3,
    src: "/src/assets/third_logo.png",
  },
  {
    id: 4,
    src: "/src/assets/fourth_logo.png",
  },
  {
    id: 5,
    src: "/src/assets/fifth_logo.png",
  },
];
</script>
<template>
  <div
    class="container mx-auto flex justify-between pt-20 pb-10 main-div--Footer px-4"
  >
    <div class="flex flex-col gap-8 itemCenter">
      <h1 class="text-bold text-4xl text-white">Castaway</h1>
      <div class="flex gap-4 text-white">
        <font-awesome-icon
          icon="fa-brands fa-instagram"
          class="cursor-pointer h-7"
        />
        <font-awesome-icon
          icon="fa-brands fa-twitter"
          class="cursor-pointer h-7"
        />
        <font-awesome-icon
          icon="fa-brands fa-facebook-f"
          class="cursor-pointer h-7"
        />
      </div>
    </div>
    <div id="Footer">
      <ul class="flex flex-col gap-4 text-white itemCenter text--Footer">
        <li><a>Home</a></li>
        <li><a>Episodes</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div>
      <ul class="flex flex-col gap-4 text-white itemCenter">
        <li>Style Guide</li>
        <li>Instructions</li>
        <li>Changelog</li>
        <li>Credit</li>
        <li>Powered by Webflow</li>
        <li>Licenses</li>
      </ul>
    </div>
    <div class="flex gap-4 icons--Footer h-16">
      <span v-for="item in items" :key="item.id">
        <el-image :src="item.src" class="h-auto w-auto" />
      </span>
    </div>
  </div>
</template>
