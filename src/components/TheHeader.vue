<template>
    <div class="header">
        <picture>
            <source
                srcset="@/assets/desktop/bg-pattern-header.svg"
                media="(min-width: 992px)"
                type="image/svg+xml"
            />
            <source
                srcset="@/assets/mobile/bg-pattern-header.svg"
                media="(max-width: 575px)"
                type="image/svg+xml"
            />
            <source
                srcset="@/assets/tablet/bg-pattern-header.svg"
                media="(max-width: 991px)"
                type="image/svg+xml"
            />

            <img src="@/assets/desktop/bg-pattern-header.svg" alt="" />
        </picture>
        <div class="header__title">
            <div class="header__logo">
                <img src="@/assets/desktop/logo.svg" alt="" />
            </div>
            <div class="switcher">
                <div class="switcher__light">
                    <img src="@/assets/desktop/icon-sun.svg" alt="" />
                </div>
                <label class="switcher__indicator">
                    <input type="checkbox" />
                    <div class="switcher__box" @click="setTheme">
                        <div
                            :class="{ switcher__btn_dark: theme }"
                            class="switcher__btn"
                        ></div>
                    </div>
                </label>
                <div class="switcher__dark">
                    <img src="@/assets/desktop/icon-moon.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations({
            setTheme: "theme/setTheme",
        }),
    },
    computed: {
        ...mapState({
            theme: (state) => state.theme.theme,
        }),
    },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/colors.scss";

.header {
    position: relative;
    img {
        width: 100%;
    }
    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        max-width: 1200px;
        padding: 0 40px;
        width: 100%;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
        @include media("max", "xl") {
            top: 30px;
        }
        @include media("max", "lg") {
            top: 45px;
        }
        @include media("max", "md") {
            top: 30px;
        }
    }
    &__logo img {
        max-width: 100%;
    }
}
.switcher {
    display: flex;
    justify-content: space-between;
    width: 115px;
    align-items: center;
    &__dark {
        img {
            width: 14px;
        }
    }
    &__indicator {
        display: block;
        width: 50px;
        height: 25px;
        position: relative;
        input {
            display: none;
        }
    }
    &__box {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        transition: 0.4s;
        border-radius: 25px;
        &:hover .switcher__btn {
            background-color: $LightViolet;
        }
    }
    &__btn {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 5px;
        bottom: 50%;
        transform: translate(0, 50%);
        background-color: $Violet;
        transition: 0.4s;
        border-radius: 50%;
        &_dark {
            transform: translate(25px, 50%);
        }
    }
}
</style>