<template>
    <vue-fixed-header ref="headRef">
        <div id="header" role="banner">
            <div class="container">
                <nav class="navbar" id="navigation" aria-label="Navigation" arialabelledby="navigation">
                    <div class="menu-btn">
                        <button class="navbar-toggler" aria-label="show menu" type="button" v-b-toggle.my-sidebar>
                            <span class="navbar-toggler-icon" style="width:50px; height:50px;">
                                <img :src="require(`@/assets/img/menu-icon.svg`)" width="100%" alt="open menu" />
                            </span>
                        </button>
                    </div>
                    <div class="main-logo">
                        <router-link class="navbar-brand m-0 mx-auto" to="/" role="link" aria-label="goto homepage" title="homepage">
                            <img v-show="$route.path == '/' || $route.path == '/wishlist' || $route.path == '/waitlistform' || $route.path == 'waitlist-success'" class="logo-icon" :src="require(`@/assets/img/logo-new.svg`)"
                                alt="logo of edyouapp" />
                            <img v-show="$route.path != '/' && $route.path != '/wishlist' && $route.path != '/waitlistform' && $route.path != '/waitlist-success'" class="logo-icon"
                                :src="require(`@/assets/img/logo-new-black.svg`)" alt="black logo of edyouapp" />
                        </router-link>
                    </div>
                    <div class="appstore">
                        <a href="https://apps.apple.com/us/app/edyou/id1586941066" class="link"><img :src="require(`@/assets/img/appstore.svg`)"
                                alt="image of apple store"></a>
                        <!-- <router-link to="https://apps.apple.com/us/app/edyou/id1586941066" class="link"><img :src="require(`@/assets/img/appstore.svg`)"
                                alt="image of apple store"></router-link> -->
                    </div>
                </nav>
            </div>
            <b-sidebar id="my-sidebar" width="1000px" #default="{ hide }" backdrop shadow no-header>
                <div class="mega-menu">
                    <div class="custom-header">
                        <b-button class="close-btn" block @click="hide">
                            <img class="close-icon" :src="require(`@/assets/img/close.svg`)" />
                        </b-button>
                        <div class="side-menu-logo">
                            <router-link class="navbar-brand m-0 mx-auto" to="/">
                                <img class="logo-icon" :src="require(`@/assets/img/logo-new-black.svg`)" />
                            </router-link>
                        </div>
                    </div>
                    <div class="menu-wrap">
                        <div class="menu-main">
                            <span>Menu</span>
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
                                <li class="list-item">
                                    <router-link to="/privacy-policy" class="link">Privacy Policy</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-footer">
                        <div class="menu-address">
                            <div class="contact-info">
                                <label>Email</label>
                                <p href="mailto:supportme@edyou.com">supportme@edyou.com</p>
                            </div>
                            <div class="contact-info">
                                <label>Phone</label>
                                <p href="tel:+1 607 254 4636">+1 607 254 4636</p>
                            </div>
                            <div class="contact-info">
                                <label>Address</label>
                                <p>Ithaca, NY 14850, United States</p>
                            </div>
                        </div>
                        <div class="appstore">
                            <!-- <router-link to="https://apps.apple.com/us/app/edyou/id1586941066" class="link"><img :src="require(`@/assets/img/appstore.svg`)"></router-link> -->
                            <a href="https://apps.apple.com/us/app/edyou/id1586941066" class="link"><img :src="require(`@/assets/img/appstore.svg`)" alt="image of apple store"></a>
                        </div>
                    </div>
                </div>
            </b-sidebar>
        </div>
    </vue-fixed-header>
</template>

<script>
import Vue from 'vue';


export default Vue.extend({
    name: "HeaderV",
    methods: {
        vueOnScroll() {
            var prev = window.pageYOffset;
            const refs = this.$refs.headRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (prev > curr) {
                    refs.classList.add("scrolled");
                    refs.classList.remove("scrollDown");
                } else {
                    refs.classList.add("scrollDown");
                    refs.classList.remove("scrolled");
                }
                if (curr === 0) {
                    refs.classList.remove("scrollDown");
                    refs.classList.remove("scrolled");
                }
                prev = curr;
            });
        },
    },
    mounted() {
        // run the function when the component's mount
        this.vueOnScroll();
    }
})
</script>

<style scoped>
/* theme css */
@font-face {
    font-family: "Gill Sans", sans-serif;
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingBlack.woff2) format('woff2'),
        url(~/assets/fonts/BrandingBlack.woff) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingBoldItalic.woff2) format('woff2'),
        url(~/assets/fonts/BrandingBoldItalic.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingBold.woff2) format('woff2'),
        url(~/assets/fonts/BrandingBold.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingLight.woff2) format('woff2'),
        url(~/assets/fonts/BrandingLight.woff) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingLightItalic.woff2) format('woff2'),
        url(~/assets/fonts/BrandingLightItalic.woff) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingMediumItalic.woff2) format('woff2'),
        url(~/assets/fonts/BrandingMediumItalic.woff) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingMedium.woff2) format('woff2'),
        url(~/assets/fonts/BrandingMedium.woff) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingSemiboldItalic.woff2) format('woff2'),
        url(~/assets/fonts/BrandingSemiboldItalic.woff) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingSemilightItalic.woff2) format('woff2'),
        url(~/assets/fonts/BrandingSemilightItalic.woff) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingSemibold.woff2) format('woff2'),
        url(~/assets/fonts/BrandingSemibold.woff) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingSemilight.woff2) format('woff2'),
        url(~/assets/fonts/BrandingSemilight.woff) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingThinItalic.woff2) format('woff2'),
        url(~/assets/fonts/BrandingThinItalic.woff) format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/BrandingThin.woff2) format('woff2'),
        url(~/assets/fonts/BrandingThin.woff) format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-Black.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-Black.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-Bold.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-Bold.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-BlackItalic.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-BlackItalic.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-BoldItalic.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-BoldItalic.woff) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-Italic.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-Italic.woff) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-LightItalic.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-LightItalic.woff) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-Medium.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-Medium.woff) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-Light.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-Light.woff) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-MediumItalic.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-MediumItalic.woff) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gill Sans", sans-serif;
    src: url(~/assets/fonts/Satoshi-Regular.woff2) format('woff2'),
        url(~/assets/fonts/Satoshi-Regular.woff) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}



body {
    font-family: "Gill Sans", sans-serif;
    font-weight: 400;
}

fixed-header.scrolled #header {
    position: fixed;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 2px hsl(0deg 0% 0% / 5%), 0 1px 4px hsl(0deg 0% 0% / 5%), 0 2px 8px hsl(0deg 0% 0% / 5%);
    padding: 0;
}

button.close.text-dark {
    margin-left: 0 !important;
}

#my-sidebar {
    max-width: 100%;
}

.b-sidebar {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 500px !important;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    margin: 0;
    outline: 0;
    transform: translateX(0);
}

#header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 15px 0;
    z-index: 99;
}

#header .b-sidebar {
    max-width: 55%;
    width: 100%;
}

.mega-menu .side-menu-logo .logo-icon {
    display: block;
    visibility: visible;
}

#header .b-sidebar header.b-sidebar-header button.close.text-dark {
    margin-left: 0;
}

.mega-menu .side-menu-logo {
    position: absolute;
    top: 0px;
    right: 0px;
}

@media (min-width: 991px) {
    .menu-wrap ul {
        columns: 2;
    }
}

.menu-wrap ul li a {
    font-family: "Gill Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 2;
    color: #333333;
}

.menu-wrap {
    display: flex;
    flex-wrap: wrap;
}

.menu-wrap .menu-social {
    flex: 0 0 35%;
}

.menu-wrap ul li {
    list-style: none;
}

.menu-wrap ul {
    padding: 0;
    margin: 20px 0;
}

.mega-menu {
    padding: 50px;
}

.menu-wrap span {
    font-family: "Gill Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
}

.menu-wrap .menu-main ul li a {
    font-size: 30px;
    font-weight: 600;
}

.b-sidebar>.b-sidebar-header {
    padding: 10px 50px;
}

.menu-footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 100px;
    /* position: absolute; */
    bottom: 0;
    left: 0;
    /* padding: 50px; */
}

.menu-footer .menu-address {
    display: flex;
    flex-wrap: wrap;
}

.menu-footer .menu-address label {
    display: block;
    font-family: "Gill Sans", sans-serif;
    font-style: normal;
    font-weight: 350;
    font-size: 20px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.9);
    margin: 0;
}

.menu-footer .menu-address .contact-info {
    padding-right: 38px;
    margin-bottom: 25px;
    width: 50%;
    flex: 0 0 50%;
}

.menu-footer .menu-address a {
    display: block;
    font-family: "Gill Sans", sans-serif;
    font-style: normal;
    font-weight: 350;
    font-size: 20px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.9);
}

button.close-btn,
button.close-btn:hover {
    display: inline-block;
    background: transparent;
    border: none;
    width: auto;
}

.custom-header {
    padding-bottom: 100px;
    position: relative;
}

.custom-header button.close-btn {
    padding: 0;
    box-shadow: none;
    background: transparent;
    outline: none;
}

fixed-header #header nav#navigation {
    flex-wrap: nowrap;
}

@media (min-width: 1600px) {
    .menu-footer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 100px;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 50px;
    }
}

@media (max-width: 800px) {
    .menu-wrap .menu-social {
        flex: 0 0 100%;
    }

    .menu-footer {
        flex-wrap: wrap;
    }

    .menu-footer .menu-address .contact-info {
        max-width: 100%;
        flex: 0 0 100%;
    }

    #header nav#navigation {
        flex-wrap: nowrap;
        padding: 0;
    }
}

/* end theme css */
</style>
