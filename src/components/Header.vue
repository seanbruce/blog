<template>
    <header>
        <div class="header__items--left">
            <div class="avatar"></div>
            <form class="search">
                <input class="search__input" type="text" placeholder="搜索">
                <button class="search__button">
                    
                </button>
            </form>
        </div>
        <div class="header__items--middle">middle</div>
        <div class="header__items--right">right</div>
    </header>
</template>



<style lang="scss" scoped>
    header {
        height: 3.7rem;
        display: flex;
        [class^="header__items"] {
            &[class$="left"] {
                flex: 0 0 25%;
                display: flex;
                .avatar {
                    flex: 0 0 3.7rem;
                    height: 100%;
                }
                .search {
                    flex: 1 0 3.7rem;
                    height: 100%;
                }
            }
            &[class$="middle"] {
                flex: 0 0 50%;
            }
            &[class$="right"] {
                flex: 0 0 25%;
            }
        }
        
    }
</style>




