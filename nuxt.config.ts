// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  ssr: false,
  spaLoadingTemplate: false,
  imports: {
    dirs: ["composables", "composables/**"],
  },
  buildModules: ["@nuxtjs/stylelint-module"],
  stylelint: {
    configFile: ".stylelintrc.js",
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
});
