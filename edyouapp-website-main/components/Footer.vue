<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-9">
          <div class="footer-left">
            <router-link class="navbar-brand m-0 mx-auto" to="/">
              <img class="logo-icon" :src="require(`@/assets/img/footer_logo.svg`)" alt="logo of edyou "/>
            </router-link>
            <p>College Life. Stay Connected</p>
            <div class="appstore">
              <!-- <router-link to="https://apps.apple.com/us/app/edyou/id1586941066" class="link"><img :src="require(`@/assets/img/appstore.svg`)" alt="image of apple store"></router-link> -->
              <a href="https://apps.apple.com/us/app/edyou/id1586941066" class="link"><img :src="require(`@/assets/img/appstore.svg`)"
                                alt="image of apple store"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="footer-links">
            <ul>
              <li class="list-item">
                <router-link to="/" class="link">Features</router-link>
              </li>
              <li class="list-item">
                <router-link to="/" class="link">About Us</router-link>
              </li>
              <li class="list-item">
                <router-link to="/university" class="link">Schools</router-link>
              </li>
              <li class="list-item">
                <router-link to="/wishlist" class="link">Wishlist</router-link>
              </li>
              <li class="list-item">
                <router-link to="/contact-us" class="link">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="col-lg-2 col-md-3">
          <div class="footer-links">
            <ul>
              <li class="list-item">
                <router-link to="/" class="link">Instagram</router-link>
              </li>
              <li class="list-item">
                <router-link to="/" class="link">Twitter</router-link>
              </li>
              <li class="list-item">
                <router-link to="/" class="link">Facebook</router-link>
              </li>
              <li class="list-item">
                <router-link to="/" class="link">Linkedin</router-link>
              </li>
            </ul>
          </div>
        </div> -->
        <div class="footer-bottom">
          <div class="copyright">
            <p>All rights reserved. EDYOU © 2023</p>
          </div>
          <div class="privacy-policy">
            <router-link to="/privacy-policy" class="link">Privacy Policy</router-link>
            <router-link to="/" class="link"><img :src="require(`@/assets/img/globe.svg`)" alt="image of globe or language"> English</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
    background: #F9F9F9;
    padding: 45px 0 5px;
    margin-top: 100px;
}

footer .footer-left p {
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    margin: 18px 0 30px;
}

footer .footer-links ul {
    list-style: none;
}

footer .footer-links ul li a {
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    color: #333333;
}

footer .footer-links ul li {
    padding-bottom: 15px;
}
footer .footer-bottom {
    width: 100%;
    padding: 20px 15px 15px;
    border-top: 1px solid #eee;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

footer .footer-bottom .privacy-policy a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 127%;
    text-align: right;
    color: #333333;
    margin-left: 15px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}

footer .footer-bottom p {
    margin: 0;
}

footer .footer-bottom .privacy-policy {
    display: flex;
    align-items: center;
}

footer .footer-bottom .privacy-policy a img {
    padding-right: 5px;
}

@media (max-width: 640px) {
  footer .footer-bottom {
      flex-wrap: wrap;
      justify-content: center;
  }
  footer .footer-bottom .privacy-policy a {
    font-size: 16px;
    margin-top: 10px;
  }
  .footer-left {
      text-align: center;
      margin-bottom: 40px;
  }
  footer .footer-links ul {
    padding: 0;
    text-align: center;
  }
}
</style>
