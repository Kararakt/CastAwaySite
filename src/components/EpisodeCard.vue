<script lang="ts" setup>
const props = defineProps({
  src: String,
  nameCard: String,
  episodeNumber: String,
  title: String,
  description: String,
});
</script>
<template>
  <div class="flex gap-[4rem] cardBorder p-10 threeEpisodeCard">
    <img :src="props.src" class="h-[32rem] w-[25rem] img--Episodecard" />
    <div class="flex flex-col justify-center gap-8">
      <div>
        <span class="secondBtnHomePage">{{ props.nameCard }}</span>
      </div>
      <span class="text-[#118DA8]">{{ props.episodeNumber }}</span>
      <div class="text-3xl font-bold text-white">{{ props.title }}</div>
      <span class="textColor">{{ props.description }}</span>
      <div><span class="btnHomePage">View Episode Details</span></div>
    </div>
  </div>
</template>
