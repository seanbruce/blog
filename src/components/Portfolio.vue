<template>
    <div>
        <h1>Portfolio Page</h1>
        <p>Your personal information list here:</p>
        <p>router: {{path}}</p>
        <p v-if="email">Your email address: {{email}}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            email() {
                return !this.$store.getters.user ? false : this.$store.getters.user.email
            },
            path() {
            }
        },
        created() {
            this.$store.dispatch('fetchUser')
        }
    }
</script>
