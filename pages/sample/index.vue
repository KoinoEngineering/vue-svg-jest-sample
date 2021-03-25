<template>
  <div>
    <freesample />
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'
import Freesample from '@/assets/svg/Freesample.svg?inline'

@Component({
  components: {
    Freesample
  }
})
export default class extends Vue {

}
</script>
