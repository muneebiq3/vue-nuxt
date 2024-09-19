<script setup lang="js">
const {color, index} = defineProps({
  color: null,
  index: Number
});

const handleSlide = direction => {
  if (direction === 'prev') {
    window.scroll(0, window.scrollY - 351);
  } else {
    window.scroll(0, window.scrollY + 351);
  }
}
</script>

<template>
  <div class="col slider"
       v-show="index === 1"
       :style="{'background':`linear-gradient(to bottom, ${color} 100px, #A09E9E 100px, #A09E9E 100px)`}">
    <div class="control prev-slide" @click="handleSlide('prev')">Previous</div>
    <div class="control next-slide" @click="handleSlide('next')">Next</div>
  </div>
  <div class="col slider"
       v-show="index === 2"
       :style="{'background':`linear-gradient(to top, #A09E9E 100px, ${color} 200px, #A09E9E 100px)`}">
    <div class="control prev-slide" @click="handleSlide('prev')">Previous</div>
    <div class="control next-slide" @click="handleSlide('next')">Next</div>
  </div>
  <div class="col slider"
       v-show="index === 3"
       :style="{'background':`linear-gradient(to top, ${color} 100px, #A09E9E 100px, #A09E9E 100px)`}">
    <div class="control prev-slide" @click="handleSlide('prev')">Previous</div>
    <div class="control next-slide" @click="handleSlide('next')">Next</div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  height: 300px;
  width: 3px;
  margin-left: 12%;
  margin-top: 120px;
}

.control {
  color: #A09E9E;
  transform: rotate(-90deg);
  cursor: pointer;
  position: absolute;
  font-family: Satoshi-Regular, serif;
  font-size: 12px;
}

.prev-slide {
  left: 2.8%;
  top: 20%;
}

.next-slide {
  left: 3.5%;
  bottom: -6%;
}
</style>