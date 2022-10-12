<script lang="ts" setup>
const props = defineProps({
  title: String,
  FIO: String,
});
const value = ref(5);
</script>
<template>
  <div
    class="bg-[#000000] cardBorder h-[20rem] heightReviewCard flex flex-col gap-4 px-10 py-10"
  >
    <el-rate size="large" disabled v-model="value" />
    <span class="text-4xl font-bold text-white title--ReviewCard">{{
      props.title
    }}</span>
    <h1 class="textColor">{{ props.FIO }}</h1>
  </div>
</template>
