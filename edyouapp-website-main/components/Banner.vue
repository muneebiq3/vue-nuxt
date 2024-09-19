<template>
  <div class="container-fluid p-0">
    <div class="main-banner">
      <div class="container">
        <div class="row">
            <div class="banner-text">
              <h1>The private social app made for <span>college life</span>.</h1>
          </div>
            <router-link class="link btn-green" to="/waitlistform" role="link" aria-label="goto waitlist" title="waitlistbtn">
             Join Waitlist
            </router-link>
        </div>
      </div>
    </div>
    <a v-show="$route.path == '/'" href="#stay_connected" class="mouse-anim">
      <img :src="require(`@/assets/img/mouse.svg`)" alt="image of animated mouse">
    </a>
  </div>
</template>

<script>
// import { BootstrapVue, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

</script>

<style scoped>
/* theme css */
html {
  scroll-behavior: smooth;
}

.main-banner .col-md-6 {
  align-items: center;
  display: flex;
}

.main-banner .container {
  max-width: 1200px;
}

.main-banner {
  background-image: url(~/assets/img/Bg.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background-attachment: fixed;
}

.main-banner:before {
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 0.4;
  content: "";
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;

}

.banner-text h1 {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 86px;
  text-align: center;
  color: #FFFFFF;
}

.banner-text h1 span {
  color: #4aa162;
  position: relative;
  display: inline-block;
}

.banner-text h1 span:before {
  content: "";
  background-image: url(~/assets/img/line_home.svg);
  width: 200px;
  height: 29px;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
}

/* end theme css */

.sev-mob {
  height: 316px;
}


.slider-inner {
  max-width: 450px;
  margin-top: 150px;
}

.slider-inner h1 {
  color: #000;
  font-weight: 800;
  line-height: 60px;
  margin-bottom: 2rem;
  font-size: 60px;
}

.slider-inner h4 {
  color: #999;
}

.groupi-app-theme {
  background-color: #63d3d8;
}

.grocer-app-theme {
  background-color: #519d3a;
}

.sev-minute-logo {
  height: 34px;
}

.case-btn {
  margin-top: 20px;
  width: 150px;
  font-weight: bolder;
  background: transparent;
  background-color: #ffffff;
  /* Green */
  border-radius: 8px;
  color: #a9d261;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 0;
  cursor: 1em;
}

.theme.ship-theme .case-btn {
  color: #c83e19 !important;
}

.sev-header {
  margin-top: 20px;
}

.theme {
  padding: 2rem 15px 0 4rem;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
  margin-bottom: 3rem;
}

.theme p {
  color: #fff;
  font-size: 20px;
  line-height: 22px;
  margin: 2rem 0;
}

.seven-theme {
  background-color: #95c83b;
}

h1.sev-title {
  color: white;
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  margin: 1.5srem 0;
}

.sev-title p {
  color: #f3f3f3;
  line-height: 16px;
  margin: 1rem 0;
}

.theme.ship-theme {
  background-color: #c60602;
}

.btn.btn-theme-light {
  background-color: #eaf8ef;
  border: 0;
  color: #4caf50;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  width: 170px;
}

.container-fluid {
  position: relative;
}

.mouse-anim {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.mouse-anim {
  animation: MoveUpDown 1s linear infinite;
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

a.link.btn-green {
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  color: #FFFFFF;
  width: 200px;
  height: 50px;
  left: 0px;
  top: 137px;
  background: #3a814e;
  border-radius: 153px;
  display: inline-block;
   position: absolute;
  top: 80%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn-primary {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 50px; */
  padding: 0px, 24px, 0px, 24px;
  text-align: center;
  color: #FFFFFF;
  width: 210px;
  height: 64px;
  left: 126px;
  background: #3a814e;
  border-radius: 4px;
  display: inline-block;
  gap: 8px;
  margin: 0;
  position: absolute;
  top: 85%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

@keyframes MoveUpDown {

  0%,
  100% {
    bottom: 40px;
  }

  50% {
    bottom: 60px;
  }
}
</style>
