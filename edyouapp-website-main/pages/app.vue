<template>
  <div id="download-app">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="main-logo">
              <router-link class="navbar-brand m-0 mx-auto" to="/" role="link" aria-label="goto homepage" title="homepage">
                 <img v-show="$route.path != '/' && $route.path != '/wishlist' && $route.path != '/waitlistform' && $route.path != '/waitlist-success'" class="logo-icon"
                                :src="require(`@/assets/img/Mobile-logo-Style.svg`)" alt="black logo of edyouapp" />
              </router-link>
          </div>
          <div class="text-after-logo">
            <p>scan the QR Code to download the <span>EDYOU</span> app</p>
          </div>
          <div class="qr-code-wrap">
            <img :src="require(`@/assets/img/qr-code 1.png`)" />
            <a href="https://apps.apple.com/us/app/edyou/id1586941066" @click="copyText" ref="btnToggle" class="get-the-app">GET THE APP</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-links">
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">term</a></li>
          <li><a href="/privacy-policy">privacy policy</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyText() {
      // const textToCopy = "https://apps.apple.com/us/app/edyou/id1586941066"; // Replace with the actual text you want to copy
      debugger;
      const textToCopy = this.$route.query.invitationcode;

      // Use the Clipboard API to copy the text to the clipboard
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Optionally, you can display a success message or perform any other action.
          this.$refs.btnToggle.innerText = 'COPIED!';
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
        });
    }
  },
};
</script>

<style scoped>
/* theme css */
html {
  scroll-behavior: smooth;
}

#download-app {
  background: #D6D6D6;
  height: 100vh;
  position: relative;
}

#download-app .main-logo {
  padding-top: 25px;
  padding-bottom: 50px;
}

#download-app .text-after-logo {
  margin-bottom: 20px;
}

#download-app .text-after-logo p {
  font-size: 20px;
  color: #000000;
  font-family: 'Inter', "SF Pro Display", sans-serif;
  font-weight: 500;
}

#download-app .text-after-logo p span {
  font-weight: 600;
  color: #53B36E;
}

#download-app .qr-code-wrap {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    max-width: 191px;
    padding: 12px;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    margin-bottom: 50px;
    transition: all 0.5s ease-in-out;
}
#download-app .qr-code-wrap:hover{
  transform: scale(1.1);
}

#download-app .get-the-app {
    border-radius: 41px;
    background: #001724;
    color: #fff;
    width: 129px;
    height: 36px;
    border: none;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#download-app .get-the-app:hover {
  text-decoration: none;
}
#download-app .qr-code-wrap img {
    max-width: 100%;
    image-rendering: pixelated;
}
.footer-links {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
}

.footer-links ul {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
}

.footer-links ul li {
    margin: 0 25px;
}

.footer-links ul li a {
    color: #686868;
    text-align: center;
    font-family: 'Inter', "SF Pro Display", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

@media (min-width: 1500px) {
  #download-app .main-logo {
    padding-bottom: 70px;
    padding-top: 35px;
  }
  #download-app .qr-code-wrap {
    max-width: 250px;
  }
  #download-app .text-after-logo p {
    font-size: 22px;
  }
  .footer-links ul li a {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  #download-app .text-after-logo {
    display: none;
  }
  #download-app .qr-code-wrap {
    background: transparent;
    filter: none;
  }
  #download-app .qr-code-wrap img {
    display: none;
  }
  #download-app button.get-the-app {
    width: 171px;
    height: 53px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #download-app {
    display: flex;
    align-items: center;
  }
  .footer-links {
    width: 100%;
  }
}

@media screen and (max-height: 600px) and (min-width: 600px){
  #download-app {
    min-height: 130vh;
  }
}

</style>
