// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  extends: [
    "./src/layers/home",
    "./src/layers/dashboard",
    "./src/layers/auth"
  ]
})
