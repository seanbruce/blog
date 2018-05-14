<template>
    <header>
        <div class="header__items--left">
            <img class="logo" src="../assets/images/icon.png" alt="">
        </div>
        <div class="header__items--middle">
            <form action="#" class="header__search">
                <input type="text" class="header__search__input" placeholder="搜索鲜花名称......">
                <button class="header__search__button">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>magnifying-glass</title>
                        <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                    </svg>
                </button>
            </form>
        </div>
        <nav class="header__items--right">
            <router-link to="/" class="header__nav__button" tag="div">
                <span class="button__text">主页</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>home</title>
                    <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
                </svg>
            </router-link>


            <router-link to="/cart" class="header__nav__button" tag="div">
                <span class="button__text">购物车</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>shopping-cart</title>
                    <path d="M13 17c0 1.104 0.894 2 2 2 1.104 0 2-0.896 2-2 0-1.106-0.896-2-2-2-1.106 0-2 0.894-2 2zM3 17c0 1.104 0.895 2 2 2 1.103 0 2-0.896 2-2 0-1.106-0.897-2-2-2-1.105 0-2 0.894-2 2zM6.547 12.172l11.068-3.162c0.211-0.061 0.385-0.289 0.385-0.51v-5.5h-14v-1.6c0-0.22-0.181-0.4-0.399-0.4h-3.202c-0.219 0-0.399 0.18-0.399 0.4v1.6h2l1.91 8.957 0.090 0.943v1.649c0 0.219 0.18 0.4 0.4 0.4h13.2c0.22 0 0.4-0.182 0.4-0.4v-1.549h-11.248c-1.15 0-1.174-0.551-0.205-0.828z"></path>
                </svg>
                <span class="cart__notification">3</span>
            </router-link>


            
            <router-link to="/signup" class="header__nav__button" tag="div">
                <span class="button__text">注册</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>user</title>
                    <path d="M7.725 2.146c-1.016 0.756-1.289 1.953-1.239 2.59 0.064 0.779 0.222 1.793 0.222 1.793s-0.313 0.17-0.313 0.854c0.109 1.717 0.683 0.976 0.801 1.729 0.284 1.814 0.933 1.491 0.933 2.481 0 1.649-0.68 2.42-2.803 3.334-2.13 0.918-4.326 2.073-4.326 4.073v1h18v-1c0-2-2.197-3.155-4.328-4.072-2.123-0.914-2.801-1.684-2.801-3.334 0-0.99 0.647-0.667 0.932-2.481 0.119-0.753 0.692-0.012 0.803-1.729 0-0.684-0.314-0.854-0.314-0.854s0.158-1.014 0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096-0.333-0.34-0.558-0.881 0.466-1.424-2.24-0.105-2.761 1.067-3.954 1.929z"></path>
                </svg>
            </router-link>
            

            <router-link to="/login" class="header__nav__button" tag="div">
                <span class="button__text">登陆</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>login</title>
                    <path d="M14 10l-6-5v3h-7v4h7v3l6-5zM17 17h-8v2h8c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2h-8v2h8v14z"></path>
                </svg>
            </router-link>


            <router-link to="/portfolio" class="header__nav__button" tag="div">
                <span class="button__text">个人资料</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>dots-three-vertical</title>
                    <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM10.001 5.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2zM10.001 14.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>
                </svg>
            </router-link>


            <div class="header__nav__button">
                <span class="button__text">退出账号</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>log-out</title>
                    <path d="M19 10l-6-5v3h-7v4h7v3l6-5zM3 3h8v-2h-8c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h8v-2h-8v-14z"></path>
                </svg>
            </div>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
    header {
        box-shadow: var(--shadow-light);
        margin-bottom: 1.5rem;
        height: 3.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        [class^="header__items"] {
            &[class$="left"] {
                .logo {
                    height: 2rem;
                    margin-left: 1.5rem;
                }
            }
            &[class$="middle"] {
                flex: 0 0 40%;

                display: flex;
                justify-content: center;
                align-items: center;


                .header__search {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &__input {
                        background-color: var(--color-grey-light-2);
                        font-family: inherit;
                        font-size: 0.8rem;
                        border: none;
                        padding: 0.35rem 1rem;
                        border-radius: 100px;
                        width: 90%;
                        margin-right: -1.5rem;
                        transition: all .2s;

                        &:focus {
                            outline: none;
                            width: 100%;
                            background-color: var(--color-grey-light-3);
                        }
                        &::-webkit-input-placeholder {
                            font-weight: 100;
                            color: var(--color-grey-light-4);
                        }
                    }

                    &__input:focus + .header__search__button {
                        background-color: var(--color-grey-light-3);
                    }

                    &__button {
                        border: none;
                        background-color: var(--color-grey-light-2);
                        width: 0.79rem;
                        height: 0.79rem;

                        svg {
                            width: 100%;
                            height: 100%;
                            fill: var(--color-grey-dark-3);
                        }
                        &:focus {
                            outline: none;
                        }

                        &:active {
                            transform: translateY(2px);
                        }
                    }
                }
            }
            &[class$="right"] {
                align-self: stretch;
                display: flex;
                align-items: stretch;
                .header__nav__button {
                    display: flex;
                    align-items: center;
                    padding: 0 0.5rem;
                    cursor: pointer;

                    position: relative;

                    &:last-child {
                        padding: 0 0 0 0.5rem;
                    }

                    &:hover {
                        background-color: var(--color-grey-light-2);
                    }

                    .button__text {
                        font-size: 0.8rem;
                        margin-right: 3px;
                    }

                    .cart__notification {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        font-size: 0.6rem;
                        width: 0.8rem;
                        height: 0.8rem;
                        border-radius: 50%;
                        background-color: var(--color-primary-light-1);
                        color: #FFF;

                        position: absolute;
                        top: 1rem;
                        right: 0;

                    }

                    svg {
                        width: 0.7rem;
                        height: 0.7rem;
                        fill: var(--color-primary-dark-1);
                    }
                    &:last-child {
                        margin-right: 1.5rem;
                    }
                }
            }
        }
        
    }

</style>




