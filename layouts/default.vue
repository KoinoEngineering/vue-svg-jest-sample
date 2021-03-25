<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  head() {
    return {
      meta: [
        { hid: 'viewport', name: 'viewport', content: this.getMetaViewportContent() }
      ]
    }
  }

  getMetaViewportContent() {
    const ua = navigator.userAgent.toLowerCase()
    const isiOS = (ua.includes('iphone') || ua.includes('ipad'))
    if (isiOS) {
      // iOSではuser-scalable=noによりフォーム入力時のズームを防止する
      return 'width=device-width, initial-scale=1, user-scalable=no'
    }
    return 'width=device-width, initial-scale=1'
  }
}
</script>

<style>
</style>
