<template>
    <div class="page3">
        <button @click.prevent="onSubmit">提交</button>
    </div>
</template>

<script>

    export default {
        props: ['userInfo'],
        methods: {
            onSubmit() {
                const submitInfo = {
                    email : this.userInfo.email,
                    password : this.userInfo.confirmPassword,
                }
                console.log(submitInfo)
                this.$store.dispatch('signup', submitInfo)
            }
        }
    }
</script>

