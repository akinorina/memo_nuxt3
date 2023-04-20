/**
 * error handler
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log('--- error handler ---')
    console.log('ERROR:', error)
    console.log('CONTEXT:', context)
  }
})
