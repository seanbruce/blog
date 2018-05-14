<template>
    <div class="signup">
        <div class="signup__content">
            <div class="signup__content__head">
                <div class="signup__content__head__indicator">
                    <div class="signup__content__head__indicator__dot" :class="{active: activePage === 'appSignupPage1'}"></div>
                    <div class="signup__content__head__indicator__dot"></div>
                    <div class="signup__content__head__indicator__dot"></div>
                </div>
            </div>
            <component :is="activePage"></component>
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
            }
        },
        components: {
            appSignupPage1: Page1,
            appSignupPage2: Page2,
            appSignupPage3: Page3,
        }
    }
</script>


<style lang="scss" scoped>
    .signup {
        padding: 4.25rem 0 5.75rem 0;
        &__content {
            overflow: hidden;
            box-shadow: var(--shadow-paper-like);

            margin: 0 auto;

            width: 22.75rem;
            height: 14.5rem;
            border: solid 1px var(--color-grey-light-4);
            border-radius: 0.2rem;

            display: flex;
            flex-direction: column;
            

            &__head {
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
