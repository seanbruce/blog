<template>
    <div class="signup" @click="closeSignup">
        <div class="signup__content" ref="signup">
            <div class="signup__content__head">
                <div class="signup__content__head__indicator">
                    <div class="signup__content__head__indicator__dot" :class="{active: activePage === 'appSignupPage1' || activePage === 'appSignupPage2' || activePage === 'appSignupPage3'}"></div>
                    <div class="signup__content__head__indicator__dot" :class="{active: activePage === 'appSignupPage2' || activePage === 'appSignupPage3'}"></div>
                    <div class="signup__content__head__indicator__dot" :class="{active: activePage === 'appSignupPage3'}"></div>
                </div>
            </div>
            <component :is="activePage" @changeActivePage="activePage = $event" :userInfo="userInfo"></component>
        </div>
        
    </div>
</template>

<script>
    import Page1 from './signup/Page1.vue'
    import Page2 from './signup/Page2.vue'
    import Page3 from './signup/Page3.vue'
    export default {
        data() {
            return {
                activePage: 'appSignupPage1',
                userInfo: {
                    email: null,
                    password: null,
                    confirmPassword: null,
                    gender: 'male',
                    phone: null,
                    name: null,
                }
            }
        },
        components: {
            appSignupPage1: Page1,
            appSignupPage2: Page2,
            appSignupPage3: Page3,
        },
        methods: {
            closeSignup(event) {
                if (!(event.target.closest('.signup__content'))) {
                    this.$emit('toggleSignup')
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .signup {
        background-color: rgba(#444, .6);

        position:absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;


        &__content {
            z-index: 10;
            
            background-color: #fff;
            position: relative;

            overflow: hidden;
            box-shadow: var(--shadow-paper-like);

            margin: 0 auto;

            width: 20rem;
            height: 20rem;
            border: solid 1px var(--color-grey-light-4);
            border-radius: 0.2rem;

            display: flex;
            flex-direction: column;
            
            &__head {
                background-color: #fff;

                height: 2rem;
                border-bottom: solid 1px var(--color-grey-light-4);
                display: flex;
                justify-content: center;
                align-items: center;
                &__indicator {
                    display: flex;
                    &__dot {
                        width: 0.8rem;
                        height: 0.8rem;
                        background: var(--color-grey-dark-3);
                        border-radius: 50%;
                        transition: all .5s;
                        &:not(:last-child) {
                            margin-right: 2rem;
                        }
                        &.active {
                            background: var(--color-primary-light-1);
                        }
                    }
                }
            }
        }
    }
</style>
