// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  //auto import components
  components:true,

  // register pinia
  plugins:[
    '@/plugins/pinia.ts'
  ],

  //css
  css: [
    '@/assets/scss/main.scss'
  ],
})
