// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    preset: 'github-pages'
  },

  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'Kauan Calheiro 🖖🏼',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Welcome to my portfolio website' },
        { name: 'author', content: 'Kauan Morinel Calheiro' },
        { name: 'keywords', content: 'Kauan Morinel Calheiro' },
        { name: 'keywords', content: 'Kauan Calheiro' },
        { name: 'keywords', content: 'Kauan Morinel' },
        { name: 'keywords', content: 'Kauan M C' },
        { name: 'keywords', content: 'Kauan M Calheiro' },
        { name: 'keywords', content: 'Kauan Morinel C' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
      ]
    }
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