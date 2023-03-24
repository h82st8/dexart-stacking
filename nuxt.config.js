export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DEXART Metaverse Tokens Staking',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Buy and stake tokens of DEXART metaverse'
      },
      { name: 'format-detection', content: 'telephone=no' },

      { property: 'og:type', content: 'website' },
      // { property: 'og:image', content: '/og/DXAdesign.jpg' },
      {
        property: 'og:description',
        content: 'Buy and stake tokens of DEXART metaverse'
      },
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'mask-icon',
        type: 'image/x-icon',
        href: '/safari-pinned-tab.svg'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/normalize.css', '~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-final-modal.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite'
  ],

  styleResources: {
    stylus: './assets/styles/variables.styl'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n', '@nuxtjs/gtm'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://some-url/api/v1'
  },

  ...(process.env.NODE_ENV === 'production'
    ? {
        gtm: {
          debug: true,
          id: 'GTM-WK6BP54'
        }
      }
    : {}),

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ru',
        file: 'ru.js'
      }
    ],

    defaultLocale: 'en',
    fallbackLocale: 'en',
    langDir: 'langs/dist',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true // recommended
    },
    vueI18n: '~/i18n.js'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-final-modal']
  }
}
