module.exports = {
  /*
  ** build
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** cache
  */

  /*
  ** css
  */

  /*
  ** dev
  */

  /*
  ** env
  */

  /*
  ** generate
  */

  /*
  ** head
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** loading
  */
  loading: { color: '#3B8070' },
  /*
  ** plugins
  */
  plugins: ['plugins/element-ui.js']
  /*
  ** rootDir
  */

  /*
  ** router
  */

  /*
  ** srcDir
  */

  /*
  ** transition
  */




  /*
  ** Build configuration
  */

}
