
<template>
  <div id="new-app">
    <client-only>
      <div class="container-fluid px-0">
        <HeaderV />
        <Banner />
        <div class="stay-connected" id="stay_connected">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="img-wrap pt-2">
                  <img :src="require(`@/assets/img/stay-connected.svg`)" alt="image of edyou community - stay connected">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vertical-content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="main__scroller">
                  <Scrollama :debug="false" :offset="0.5" @step-enter="stepHandler" class="main__scrollama">
                    <transition name="slide-fade">
                      <div class="step" data-step="1">
                        <div class="tab-content">
                          <div class="side-image">
                            <div class="right-content" data-message="This is post section" tabindex="0"
                              role="contentinfo">
                              <span>Post</span>
                              <p class="text-muted font-weight-normal">100% USER CONTROL</p>
                              <p class="text-muted font-weight-normal">U Post to who you want.</p>
                              <p class="text-muted font-weight-normal">U decide how long your content lives</p>
                              <p class="text-muted font-weight-normal">Self-Destruct times illustration</p>
                            </div>
                            <img class="slide-content-image" v-if="isMobile === true"
                              :src="require(`@/assets/img/post.png`)" data-message="This is post image" tabindex="0"
                              role="img">
                          </div>
                        </div>
                      </div>
                    </transition>
                    <div class="two step" data-step="2">
                      <div class="tab-content">
                        <div class="side-image">
                          <div class="right-content" data-message="This is chat section" tabindex="0" role="contentinfo">
                            <span>Chat</span>
                            <!-- <h3>Lorem ipsum used in the graphic text commonly</h3> -->
                            <p class="text-muted font-weight-normal">Encrypted for your security.</p>
                            <p class="text-muted font-weight-normal">Message 1 person, create a group and message more!
                            </p>
                            <p></p>
                          </div>
                          <img class="slide-content-image" v-if="isMobile === true"
                            :src="require(`@/assets/img/chat-images.png`)">
                        </div>
                      </div>
                    </div>
                    <div class="three step" data-step="3">
                      <div class="tab-content">
                        <div class="side-image">
                          <div class="right-content" data-message="This is u events section" tabindex="0" role="contentinfo">
                            <span>U Events w/ RSVP feature</span>
                            <p class="text-muted font-weight-normal">Scheduling events, meetings, lunches and dinners has
                              never been easier.</p>
                            <p class="text-muted font-weight-normal">Set the event, select the guest and send the event,
                              we
                              handle the rest.</p>
                            <p class="text-muted font-weight-normal">Automatically enters in your event calendar.</p>
                          </div>
                          <img class="slide-content-image" v-if="isMobile === true"
                            :src="require(`@/assets/img/u-events.png`)">
                        </div>
                      </div>
                    </div>
                    <div class="four step" data-step="4">
                      <div class="tab-content">
                        <div class="side-image">
                          <div class="right-content" data-message="This is u communities section" tabindex="0" role="contentinfo">
                            <span>U Communities</span>
                            <!-- <h3>Lorem ipsum used in the graphic text commonly</h3> -->
                            <p class="text-muted font-weight-normal">U can set up a any type of group, whether it is with
                              two people or establish a new community for the everyone, it’s up to U.</p>
                            <p class="text-muted font-weight-normal">U have public and private groups for you to decide to
                              create or join</p>
                          </div>
                          <img class="slide-content-image" v-if="isMobile === true"
                            :src="require(`@/assets/img/u-communities.png`)">
                        </div>
                      </div>
                    </div>
                    <div class="five step" data-step="5">
                      <div class="tab-content">
                        <div class="side-image">
                          <div class="right-content" data-message="This is stories section" tabindex="0" role="contentinfo">
                            <span>Stories</span>
                            <!-- <h3>Lorem ipsum used in the graphic text commonly</h3> -->
                            <p class="text-muted font-weight-normal">U can stay connected with your college friends and
                              easily share your college memories and experiences all at once!</p>
                          </div>
                          <img class="slide-content-image" v-if="isMobile === true"
                            :src="require(`@/assets/img/stories.png`)">
                        </div>
                      </div>
                    </div>
                    <!-- <div class="six step" data-step="6">
                    <div class="tab-content">
                      <div class="side-image">
                        <div class="right-content">
                          <span>Video Chat</span>
                          <h3>Lorem ipsum used in the graphic text commonly</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                    </div> -->


                  </Scrollama>
                  <div v-if="isMobile === false" class="main__graphic justify-content-end"
                    v-bind:style="{ 'background-image': `url(${require('@/assets/img/' + currStep)})` }">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-about">
          <div class="container">
            <div class="row" data-message="This is about section" tabindex="0" role="contentinfo">
              <div class="col-md-3">
                <div class="head-title">
                  <h1>About</h1>
                </div>
              </div>
              <div class="col-md-9">
                <p class="text-muted font-weight-normal">EDYOU was created by Cornell MBA Graduate students who wanted to
                  create a EDU community, a place to stay connected with their college friends and segment college life
                  onto
                  one all-inclusive platform.</p>
                <p class="text-muted font-weight-normal">A private and encrypted social media application to share
                  content,
                  posts, stories, search for new friends, encrypted chat and make it easier to schedule events with our
                  RSVP
                  feature. </p>
                <p class="text-muted font-weight-normal">EDYOU was created for U, the college students, and alumni to stay
                  connected.</p>
                <p class="text-muted font-weight-normal">EDYOU provides 100% User control over content, by allowing you to
                  select who sees your content and allowing you to decide for how long the content will live before being
                  deleted permanently off our servers.</p>
                <p class="text-muted font-weight-normal">EDYOU established a double verification process to enter our
                  application to ensure that you were communicating to real people and real profiles 100% of the time. A
                  verification email will be set to your college edu email as well as your cell phone to verify your
                  identity</p>
                <p class="text-muted font-weight-normal">We look forward to growing EDYOU and adding new features and
                  products over the next few months and would love to hear your feedback, so please reach out to us.</p>
                <p class="text-muted font-weight-normal">Welcome to our EDYOU community,</p>
                <p class="text-muted font-weight-bold ">TEAM EDYOU</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </client-only>
  </div>
</template>



<script>
import "intersection-observer";
import { features } from "process";
import Scrollama from "vue-scrollama";

export default {
  name: "newApp",
  components: {
    Scrollama,
    features
  },
  data() {
    return {
      currStep: "post.png",
      chat: this.chat,
      images: [
        "post.png",
        "chat-images.png",
        "u-events.png",
        "u-communities.png",
        "stories.png",
        // "iPhone-video.jpg",
      ],
      isMobile: false,
      mobileScreenSize: 768, // mobile screen size
    };
  },
  methods: {
    stepHandler({ element, index, direction }) {
      this.currStep = "";
      this.currStep = this.images[element.dataset.step - 1];
    },
    handleResize() {
      if (window.innerWidth <= this.mobileScreenSize) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
  },
  computed: {
    imgSrc: () => {
      return this.currStep;
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

};
</script>



<style  lang="scss">
// additions and overrides of DOM elements vue-scrollama sets up
.main__scroller {
  display: flex;

  .main__graphic {
    flex: 1;
    height: 75vh;
    top: 17vh;
    position: sticky;
    background-repeat: no-repeat;
    background-position-x: right;
    margin-right: 0rem;
    background-size: contain;
  }

  .main__scrollama {
    flex: 1;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

// your elements styles
.main__graphic {
  height: 100%;
  margin: 0 1rem;
  font-size: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step {
  padding: 0 0;
  margin: 0 0rem;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }
}

.main-logo a.nuxt-link-exact-active {
  position: relative;
}

.main-logo a.nuxt-link-exact-active:before {
  background: url(~/assets/img/logo-new.svg);
  background-repeat: no-repeat;
  background-position-x: center;
  width: 400px;
  height: 60px;
  display: block;
  content: "";
}

.nuxt-link-exact-active .logo-icon {
  visibility: hidden;
  display: none;
}

fixed-header.scrolled #header .main-logo a.nuxt-link-exact-active:before {
  background: url(/_nuxt/assets/img/logo-new-black.svg);
  background-repeat: no-repeat;
  background-position: center;
}

footer .nuxt-link-exact-active .logo-icon {
  display: block;
  visibility: visible;
}

img {
  max-width: 100%;
  height: auto;
}

.banner-text h1 {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 25px;
  text-align: left;
  color: #1d1d1f;
}

.stay-connected .text-wrap h3 {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #1d1d1f;
  margin: 0 0 40px;
}

.stay-connected {
  padding-top: 70px;
  background: #F9F9F9;
}

.stay-connected .text-wrap a {
  margin-bottom: 50px;
  display: block;
}

.vertical-content {
  padding: 100px 0;
}

.vertical-content ul.nav-pills .nav-link.active,
.vertical-content ul.nav-pills .show>.nav-link {
  background: transparent;
  filter: invert(67%) sepia(12%) saturate(1614%) hue-rotate(84deg) brightness(90%) contrast(87%);
}

.vertical-content ul.nav-pills {
  background: transparent;
  justify-content: center;
}

.vertical-content ul.nav-pills li.nav-item {
  margin: 15px 0;
}

.tab-content .side-image {
  display: flex;
  justify-content: space-between;
}

.tab-content {
  padding-left: 0px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}


.tab-content .side-image .right-content {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tab-content .side-image .right-content span {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 1.4;
  color: #4aa162;
  margin-bottom: 10px;
}

.tab-content .side-image .right-content h3 {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 25px;
  color:  #1d1d1f;
  margin-bottom: 20px;
}

.tab-content .side-image .right-content p {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 350;
  font-size: 17px;
  line-height: 25px;
  color: #1d1d1f !important;
}

.home-about p {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 350;
  font-size: 17px;
  line-height: 25px;
  color: #1d1d1f !important;
}

.home-about h1 {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 25px;
}

@media (max-width: 567px)and (min-width: 100px) {
  .tab-content .side-image .right-content {
    padding: 0px;
    margin-top: 30px;
  }

  .tab-content .side-image img {
    width: 100%;
  }

  .tab-content {
    padding-left: 0;
  }

  .vertical-content ul.nav-pills {
    padding: 0;
  }

  .tab-content .side-image .right-content h3 {
    line-height: 0.5;
    font-size: 30px;
  }

  .tab-content .side-image .right-content p {
    font-size: 16px;
  }

  .banner-text h1 {
    font-size: 45px !important;
    line-height: 56px !important;
  }

  .main-banner {
    height: 600px;
    min-height: auto;
  }

  .home-about p {
    font-size: 16px;
  }

  .tab-content .side-image {
    flex-wrap: wrap;
  }
}

@media (max-width: 375px) {
  .banner-text {
    margin-top: 70px;
    padding: 20px 0;
  }
}

@media (max-width: 640px) {
  .main-logo a.nuxt-link-exact-active:before {
    width: 140px;
    height: 60px;
    background-size: contain;
  }

  .main-banner {
    height: 900px;
    min-height: auto;
  }

  .banner-text {
    margin: 10px 0 0 0;
    padding: 20px 0 70px;
  }
}

@media screen and (max-width: 569px) and (min-width: 100px) {
  .stay-connected {
    width: auto;
  }

  .text-wrap {
    width: auto;
  }


  .stay-connected .text-wrap h3 {
    text-align: right;
    width: 280x;

  }

  .img {
    max-width: 80px;
  }

  .banner-text {
    margin: -34px 0 0 0;
    // padding: 70px 0;
  }

}

.slide-content-image {
  margin-top: 50px;
}

/* end theme css */</style>
