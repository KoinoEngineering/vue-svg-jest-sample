
import path from 'path'
import { Configuration } from '@nuxt/types'
require('dotenv').config()

const nuxtConfig: Configuration = {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/error-handler'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ]
  },
  /*
  ** Routing configuration
  */
  router: {
    base: process.env.NUXT_ENV_BASE_PATH
  },
  generate: {
    dir: path.join('dist', process.env.NUXT_ENV_BASE_PATH || '')
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = '#source-map'
      }

      const svgRule = config!.module!.rules.find((rule) => {
        const test = rule!.test as RegExp
        return test.test('.svg')
      })

      svgRule!.test = /\.(png|jpe?g|gif|webp)$/

      config!.module!.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              },
              'vue-svg-loader'
            ]
          },
          {
            loader: 'file-loader',
            query: {
              name: 'svg/[name].[hash:8].[ext]'
            }
          }
        ]
      })
    }
  },
  watchers: {
    webpack: {
      poll: true
    }
  }
}

export default nuxtConfig
