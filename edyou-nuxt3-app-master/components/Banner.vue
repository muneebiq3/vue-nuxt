<script setup lang="js">
const slides = [
  {
    heading: "Become America’s<br> TOP <span style='color: #53B36E;'>College</span> influencer</div>",
    subheading: "Embrace the opportunity to exhibit your skills with confidence.<br>" +
        " Create, perform, and share your talent through our user-friendly<br>" +
        " interface. Whether you excel in creating captivating content,<br>" +
        " mesmerizing performances, or inspiring tutorials, this is your<br>" +
        " stage to shine. The more you express your potential, the greater<br>" +
        " your impact.",
    headingRight: "Top Influencer",
    subHeadingRight: "",
    image: "/mobile-screen1.png",
    mainColor: "#0C4564"
  },
  {
    heading: "Celebrate your creativity,<br> with <span style='color: #53B36E;'>EDYOU</span> Stories",
    subheading: "EDYOU stories give you an platform to ignite your genuine<br>" +
        " connections through your creativity, potential and share success<br>" +
        " with your loved ones.Edyou Influencers program picks tops stories<br>" +
        " and shows to all American colleges and leaders.",
    headingRight: "Stories",
    subHeadingRight: "Unleash your human potential and show to world,<br>" +
        " No bullies, No fake people. Celebrate and<br>" +
        " accelerate your potential.",
    image: "/mobile-screen2.png",
    mainColor: "#5B8184"
  },
  {
    heading: "The private<br> social app made for <div style='color: #53B36E;'>college life.</div>",
    subheading: "Millions of businesses of all sizes—from startups to large<br>" +
        " enterprises—use Stripe's software and APIs to accept payments,<br>" +
        " send payouts, and manage their businesses online.",
    headingRight: "Groups",
    subHeadingRight: "",
    image: "/mobile-screen3.png",
    mainColor: "#4E54C6"
  },
]
</script>
<template>
  <div v-for="(slide, index) in slides" class="banner" :key="index">
    <Slide class="slide-wrapper" :slideData="slide" :index="index+1"/>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background-image: url('@/assets/images/banner-bg.svg');
  height: 90vh;
}
</style>