// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  app: {
    head: {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
        }
      ],
    }
  },
  alias: {
    assets: '/<rootDir>/assets'
  },
  css: ['~/assets/css/tailwind.scss', '~/assets/css/main.scss'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],
  build: {
    transpile: ['gsap'],
  },
});