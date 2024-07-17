import colors from 'vuetify/es5/util/colors'


export default {
  head: {
    titleTemplate: "%s - Sara's Web",
    title: "web-sara",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  },

  css: ["./assets/main.scss"],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios"],
  router: {
    base: "/nuxt1/",
  },

  axios: {
    baseURL: "/",
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
};

// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/nuxt1/'
//   }
// }
