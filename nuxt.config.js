export default {
  server: {
    port: 4000,
    host: '0.0.0.0'
  },
  css: [
    '@/assets/css/reset.css'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
