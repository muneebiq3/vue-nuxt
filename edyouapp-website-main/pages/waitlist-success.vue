<template>
    <!-- <ClientOnly> -->
    <div class="container-fluid p-0">
        <HeaderV />
        <div class="main-banner">
            <div class="container container-center">
                <div class="inner-top"></div>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 text-left">
                                <div class=""><router-link to="/" role="link" aria-label="goto homepage" title="homepage">
                                        <b-icon-x-circle class=""></b-icon-x-circle>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="join-header-text text-left">Congratulations! Welcome to the Inner Circle of
                                    EDYOU.!</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="trext-left">You’re at #{{ this.$route.query?.wait_list }}!</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>You've successfully completed the waiting list process and secured your spot in the
                                    exclusive inner circle for EDYOU app.</p>
                                <div class="row justify-content-center">
                                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json"
                                        background="transparent" speed="1" style="width: 300px; height: 300px;" loop
                                        autoplay></lottie-player>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="uni-listing">
                    <div class="container">

                    </div>
                </section>
            </div>
        </div>
    </div>
    <!-- </ClientOnly> -->
</template>

<script>

export default {
    data() {
        return {
            hello: null
        }
    },
    methods: {
        modifyUrl(url) {
            let endpoint = url;
            endpoint = endpoint.replace('oembed', 'iframe');
            endpoint = endpoint.replace('url', 'src');
            endpoint = endpoint.replace('watch?v=', 'embed/');
            endpoint = endpoint.replace('oembed', 'iframe');
            return endpoint;
        },

    },
    beforeMount() {
        // this.onStateChange("alabama");

    },
};
</script>

<style>
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

.container-center {
    width: 512px;
    height: 576px;
    top: 128px;
    left: 464px;
    border-radius: 16px;
    padding: 24px;
    gap: 32px;
    justify-content: space-between;
    background: white;
}

svg.bi-x-circle.b-icon.bi {
    font-size: 40px;
}

.join-header-text {
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
}

.form-element {
    height: 64px;
}

.submit-btn {
    height: 64px;
    background: #4EA064;
    border: #4EA064;
}

.submit-btn:active {
    background: #4EA064;
    border: #4EA064;
}

.submit-btn:hover {
    height: 64px;
    background: #4EA064;
    border: #4EA064;
}
</style>
