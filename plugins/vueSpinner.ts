// https://github.com/greyby/vue-spinner#readme
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Loading", ClipLoader);
});
