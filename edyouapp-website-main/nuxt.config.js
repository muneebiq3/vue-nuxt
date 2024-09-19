export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'edyou',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {name: 'apple-itunes-app', content: 'app-id=1586941066, affiliate-data=myAffiliateData'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollama.js',
    '~/plugins/bootstrap-icons.js',
    // '~/plugins/vue-fixed-header.js'
    '~/plugins/lottie-vue-player.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-compress",
    // 'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['gsap'],
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': 'https://api.prod.edyou.io/',

  },

  render: {
    static: {
      setHeaders: (resp, path) => {
        if (
          resp.req.originalUrl ===
          '/.well-known/apple-app-site-association' || resp.req.originalUrl ===
          '/apple-app-site-association'
        ) {
          console.log('Testing');
          resp.setHeader('Content-Type', 'application/json');
        }
      },
    },
  }


  // gsap: {
  //   extraPlugins: {
  //     scrollTo: true,
  //     scrollTrigger: true,
  //     scrollBar: true,
  //   },
  //   extraEases: {
  //     expoScaleEase: true
  //   },
  //   clubPlugins: {
  //     scrollSmoother: true,
  //   },
  // }
}
