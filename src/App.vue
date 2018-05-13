<template>
  <div id="app">
    <div class="container">
        <app-header></app-header>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss" scoped>
</style>
