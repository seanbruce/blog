<template>
    <form class="page2" action="#">
        <div class="page2__content">
            <label for="email" class="name">
                <span>姓名</span>
                <input type="text" id="name" placeholder="姓名" v-model="userInfo.name">
            </label>
            <label for="phone" class="phone">
                <span>手机号码</span>
                <input type="number" id="phone" v-model="userInfo.phone">
            </label>
            <label for="male" class="gender">
                <span>男</span>
                <input type="radio" id="male" value="male" name="gender" v-model="userInfo.gender">
            </label>
            <label for="female" class="gender">
                <span>女</span>
                <input type="radio" id="female" value="female" name="gender" v-model="userInfo.gender">
            </label>
            <button @click.prevent="next" class="next">确认</button>
        </div>
    </form>
</template>

<script>
export default {
  methods: {
      next() {
          this.$emit('changeActivePage', 'appSignupPage3')
      }
  },
  props: ['userInfo'],
}
</script>


<style lang="scss" scoped>
    .page2 {
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
                    &#name {
                        letter-spacing: 0.1rem;
                    }
                    &#phone {
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

