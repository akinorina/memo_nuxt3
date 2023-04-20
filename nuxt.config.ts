// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 4000
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 3 app',
      meta: [
        { name: 'description', content: 'Nuxt 3 for beginners' }
      ],
      link: [
        { rel: 'icon', href: '/images/favicon.ico' }
      ]
    }
  }
})
