// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    preset: 'github-pages'
  },

  // router: {
  //   options: {
  //     hashMode: true,
  //     scrollBehaviorType: 'smooth'
  //   }
  // },

  app: {
    baseURL: '/portfolio/',
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [{
      code: 'pt_br',
      file: 'pt_br.json',
    }, {
      code: 'en',
      file: 'en.json',
    }, {
      code: 'pt',
      file: 'pt.json',
    }]
  },

  compatibilityDate: '2025-07-16'
})