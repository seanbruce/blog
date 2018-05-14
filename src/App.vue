<template>
  <div id="app">
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss" scoped>
</style>
