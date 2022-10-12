<script setup lang="ts">
import type { FormInstance } from "element-plus";
import EpisodeCard from "../components/EpisodeCard.vue";
import ReviewCard from "../components/ReviewCard.vue";
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

const cards = [
  {
    id: 1,
    src: "/src/assets/firstCard.png",
    nameCard: "Gear",
    episodeNumber: "Episode 3",
    title: "Should you get outboard audio gear?",
    description:
      "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
  },
  {
    id: 2,
    src: "/src/assets/secondCard.png",
    nameCard: "Tips & Tricks",
    episodeNumber: "Episode 2",
    title: "Mic tricks to take you to the next level",
    description:
      "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
  },
  {
    id: 3,
    src: "/src/assets/thirdCard.png",
    nameCard: "Gear",
    episodeNumber: "Episode 1",
    title: "The best microphone under $200",
    description:
      "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
  },
];

const photos = [
  {
    id: 1,
    title: "I can’t recommend this podcast enough",
    FIO: "Betty Lacey",
  },
  {
    id: 1,
    title: "I can’t recommend this podcast enough",
    FIO: "Marcus Brown",
  },
  {
    id: 3,
    title: "Every episode is a gem!",
    FIO: "Jessica Knowl",
  },
  {
    id: 4,
    title: "A wealth of audio knowledge",
    FIO: "Marcus Brown",
  },
  {
    id: 5,
    title: "Whoa whoa, let me take some notes!",
    FIO: "Scott Adams",
  },
  {
    id: 6,
    title: "I’ve upped my game considerably since I started listening",
    FIO: "Steven Blast",
  },
];

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value.indexOf("@") == -1) {
    callback(new Error("Please input correct email address"));
  } else if (value.indexOf(".") == -1) {
    callback(new Error("Please input correct email address"));
  } else {
    callback();
  }
};

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the Name"));
  } else {
    callback();
  }
};

const SubmitMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("Submit!");
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = reactive({
  Email: "",
  Name: "",
  Message: "",
});

const rules = reactive({
  Email: [{ validator: validateEmail, trigger: "blur" }],
  Name: [{ validator: validateName, trigger: "blur" }],
});

const ruleFormRef = ref<FormInstance>();
</script>
<template>
  <div class="main-div--HomePage">
    <div
      class="container mx-auto grid grid-cols-2 py-20 paddingColumnGap"
      id="Home"
    >
      <el-image src="/src/assets/pic_HomePage.png" />
      <div
        class="flex flex-col gap-[4rem] justify-center ml-auto text-white second-text--HomePage"
      >
        <h1 class="text-5xl leading-normal first-title--HomePage">
          Take your podcast to the<br />
          <span class="borderBottom">next</span>
          <span class="text-6xl"> level</span>
        </h1>
        <div class="flex flex-col gap-6">
          <h1 class="text-xl">Listen on</h1>
          <div class="flex gap-6">
            <div v-for="item in items" :key="item.id">
              <el-image :src="item.src" class="h-auto w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-[5rem] py-20" id="Episodes">
      <div class="flex items-end justify-between paddingColumnGap">
        <h1 class="text-white text-5xl font-bold first-title--HomePage">
          Latest episodes
        </h1>
        <span class="btnHomePage">View all episodes</span>
      </div>
      <div class="flex flex-col gap-8">
        <div v-for="card in cards" :key="card.id">
          <EpisodeCard
            :src="card.src"
            :nameCard="card.nameCard"
            :episodeNumber="card.episodeNumber"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
      <div
        class="container mx-auto py-20 grid grid-cols-2 gap-[6rem]"
        id="About"
      >
        <div class="flex flex-col justify-center gap-8">
          <div class="flex flex-col gap-4">
            <div class="iconRight">
              <span
                ><el-icon :size="65"><Right /></el-icon
              ></span>
            </div>
            <h1 class="text-[#118DA8]">Meet your host</h1>
            <div class="text-6xl text-white font-bold first-title--HomePage">
              Jacob Paulaner
            </div>
          </div>
          <div class="textColor text-xl">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </div>
          <span class="textColor text-xl"
            >He’s here to help you level up your game by sharing everything he’s
            learned along the way.</span
          >
        </div>
        <el-image src="/src/assets/second_pic_HomePage.png" />
      </div>
    </div>
    <div class="container mx-auto py-20" id="Contact">
      <div class="cardBorder grid grid-cols-2 p-16 main-div-form">
        <div class="flex flex-col gap-4">
          <span class="text-[#118DA8]">Email Newsletter</span>
          <h1 class="text-white font-bold text-5xl">Subscribe for updates</h1>
        </div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="main-div-form--HomePage flex flex-col gap-5"
          ><el-form-item prop="Name"
            ><el-input
              class="pb-2"
              placeholder="Name"
              v-model="ruleForm.Name"
              type="text" /></el-form-item
          ><el-form-item prop="Email"
            ><el-input
              class="pb-2"
              placeholder="Email"
              v-model="ruleForm.Email"
              type="email" /></el-form-item
          ><el-form-item class="btnFormSubmit"
            ><el-button @click="SubmitMessage(ruleFormRef)"
              >Submit</el-button
            ></el-form-item
          ></el-form
        >
      </div>
      <div class="img-form">
        <el-image
          src="/src/assets/box_line.png"
          class="-mt-[8rem] -ml-[4.5rem]"
        />
      </div>
    </div>
    <div class="container mx-auto py-20">
      <div class="grid grid-cols-3 sixReviewCard gap-4">
        <div v-for="photo in photos" :key="photo.id">
          <ReviewCard :title="photo.title" :FIO="photo.FIO" />
        </div>
      </div>
    </div>
  </div>
</template>
