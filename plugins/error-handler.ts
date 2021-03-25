import { Plugin } from '@nuxt/types'
declare module 'vue/types/vue' {
  interface Vue {
    $handleError(error: unknown): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $handleError(error: unknown): Promise<void>
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $handleError(error: unknown): Promise<void>
  }
}

function outputError(error: unknown) {
  /* eslint no-console: 'off' */
  console.error(error)
}

const errorHandlerPlugin: Plugin = (context, inject) => {
  inject('handleError', (error: unknown) => {
    outputError(error)
    return new Promise(() => {})
  })
}

export default errorHandlerPlugin
