<template>
    <form class="page1" action="#">
        <div class="page1__content">
            <label for="email" class="email">
                <span>账号</span>
                <input type="email" id="email" placeholder="账号请使用邮箱">
            </label>
            <label for="password" class="password">
                <span>密码</span>
                <input type="password" id="password">
            </label>
            <label for="confirmPassword" class="confirm-password">
                <span>确认密码</span>
                <input type="password" id="confirmPassword">
            </label>
            <button type="submit" class="next">确认</button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    .page1 {
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch;

            width: 16.5rem;
            height: 10.4rem;

            // border: solid 1px #AAA;

            label {
                // padding: 0 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                // border: solid 1px red;

                span {

                }

                input {
                    width: 75%;
                    height: 1.5rem;
                    font-size: 0.8rem;
                    padding: 0 0.5rem;
                    &#email {
                        letter-spacing: 0.1rem;
                    }
                    &#password,
                    &#confirmPassword {
                        letter-spacing: 0.3rem;
                    }
                    &:focus {
                        outline: none;
                    }
                }
            }

            .next {
                border: none;
                background-color: #fff;
                display: block;
                align-self: center;
                padding: 0.1rem 1rem;
            }
        }
    }
</style>

