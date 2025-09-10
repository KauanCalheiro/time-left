// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    preset: 'github-pages'
  },

  app: {
    baseURL: '/time-left/',
    head: {
      title: 'Kauan Calheiro 🖖🏼',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
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