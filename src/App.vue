<template>
  <v-app>
    <div class="container">
        <app-header @toggleSignup="showSignup = !showSignup"></app-header>
        <router-view></router-view>
        <app-signup v-if="showSignup"  @toggleSignup="toggleSignup"></app-signup>
    </div>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import SignUp from './components/SignUp.vue'
  export default {
    data () {
      return {
        showSignup : false,
        showLogin : false,
      }
    },
    components: {
      appHeader: Header,
      appSignup: SignUp,
      
    },
    created() {
      this.$store.dispatch('autoLogin')
    },
    methods: {
      toggleSignup() {
        this.showSignup = !this.showSignup
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
