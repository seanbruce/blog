<template>
    <div class="login">
        <h1>LogIn Page</h1>
        <form class="login__content">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="loginInfo.email">
            <label for="password">密码</label>
            <input type="password" id="password" v-model="loginInfo.password">
            <button @click.prevent="onSubmit">登陆</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginInfo: {
                    email: null,
                    password: null,
                }
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('login', this.loginInfo)
            }
        }
}
</script>


<style lang="scss" scoped>
    .login {
        flex-grow: 1;
        &__content {
            border: solid 1px #EEE;
            margin: 0 auto;
            width: 50%;
            input {
                display: block;
            }
        }
    }
</style>
