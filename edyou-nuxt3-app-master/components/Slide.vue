<script setup lang="js">
import {onMounted} from 'vue';
import {gsap} from "gsap";

gsap.registerPlugin();

const {slideData, index} = defineProps({
  slideData: {},
  index: Number
});

const color = ref();

const updateScrollPosition = () => {
  document.querySelectorAll('.slide').forEach((value) => {
    value.style.display = 'none'
  });
  if (window.scrollY >= 400 && window.scrollY < 850) {
    document.querySelectorAll('.slide')[1].style.display = 'inline';
  } else if (window.scrollY >= 850) {
    document.querySelectorAll('.slide')[2].style.display = 'inline';
  } else {
    document.querySelectorAll('.slide')[0].style.display = 'inline';
  }
};

onMounted(() => {
  color.value = slideData.mainColor;

  window.addEventListener('scroll', updateScrollPosition);

  const header = document.querySelector('.header');

  gsap.to(header, {
    duration: "100%",
    position: "sticky",
    top: '0px',
    "z-index": 100
  });

  gsap.to('.slide', {
    duration: "100%",
    position: "fixed",
    maxWidth: '100%',
    top: '151px',
    "z-index": 100,
  });
});
</script>

<template>
  <div class="container slide inline" v-show="index === 1">
    <div class="grid grid-cols-3 ml-1">
      <SlideScroller :index="index" :color="color"/>
      <div class="col left-section absolute">
        <div :style="{'color': color}" class="heading mb-5" v-html="slideData.heading"></div>
        <p class="sub-heading mb-5" v-html="slideData.subheading"></p>
        <button :style="{'background-color': color}" class="btn-download">Download App</button>
      </div>
      <div class="col right-section absolute" :style="{'background-color': color}">
        <div class="heading">{{ slideData.headingRight }}</div>
        <div class="subheading" v-html="slideData.subHeadingRight"></div>
        <img :src="`/_nuxt/assets/images${slideData.image}`">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide {
  .left-section {
    height: 520px;
    width: 43%;
    left: 6%;
    border-radius: 10px;
    background: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .heading {
      text-align: center;
      font-family: Satoshi-Bold, serif;
      font-size: 45px;
      font-style: normal;
      line-height: 60px;
      padding: 0 40px 0 10px;
    }

    .sub-heading {
      color: #425466;
      font-family: 'Satoshi-Regular', sans-serif; // To be change to Helvetica Neue
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-top: 30px;
      padding: 0 20px;
    }

    .btn-download {
      border-radius: 40px;
      padding: 10px 20px;
      margin-top: 30px;
      margin-right: 55px;
      color: white;
      font-size: 15px;
    }
  }

  .right-section {
    height: 520px;
    width: 46%;
    left: 47%;
    border-radius: 10px;
    margin-right: 25px;
    box-shadow: -3px 0px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .heading {
      color: #FFF;
      font-family: Satoshi-Regular, serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .subheading {
      color: #D6D6D6;
      text-align: center;
      font-family: Satoshi-Regular, serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 15px */
      letter-spacing: .5px;
      height: 64px;
    }

    img {
      height: 350px;
    }
  }
}
</style>