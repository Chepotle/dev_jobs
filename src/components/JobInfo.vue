<template>
    <div class="wrapper" :class="{ wrapper_dark: theme }">
        <div class="loading" v-if="!jobItem" :class="{ loading_dark: theme }">
            <div class="loading__text">Loading</div>
            <img
                class="loading__gif"
                src="@/assets/desktop/loading.svg"
                alt=""
            />
        </div>
        <the-header />
        <div class="container" :class="{ container_dark: theme }">
            <div class="job" v-if="jobItem">
                <div class="title" :class="{ title_dark: theme }">
                    <div
                        class="title__logo"
                        :style="{
                            backgroundColor: jobItem.logoBackground,
                        }"
                    >
                        <img :src="'.' + jobItem.logo" alt="" />
                    </div>
                    <div class="title__block">
                        <div class="">
                            <div
                                class="title__company"
                                :class="{ title__company_dark: theme }"
                            >
                                {{ jobItem.company }}
                            </div>
                            <div class="title__site">
                                {{ jobItem.company.toLowerCase() + ".com" }}
                            </div>
                        </div>
                        <a
                            target="_blank"
                            :href="jobItem.website"
                            class="title__link"
                        >
                            <button
                                class="title__site-btn"
                                :class="{ title__sitebtn_dark: theme }"
                            >
                                Company Site
                            </button>
                        </a>
                    </div>
                </div>
                <div class="info" :class="{ info_dark: theme }">
                    <div class="info__title">
                        <div class="info__main">
                            <div class="info__time">
                                <span>{{ jobItem.postedAt }}</span>
                                <span>&ensp;&bull;&ensp;</span>
                                <span>{{ jobItem.contract }}</span>
                            </div>
                            <div
                                class="info__name"
                                :class="{ info__name_dark: theme }"
                            >
                                {{ jobItem.position }}
                            </div>
                            <div class="info__location">
                                {{ jobItem.location }}
                            </div>
                        </div>
                        <a
                            :href="jobItem.apply"
                            target="_blank"
                            class="info__link"
                        >
                            <button class="info__apply-btn">Apply Now</button>
                        </a>
                    </div>
                    <div class="info__text">
                        {{ jobItem.description }}
                    </div>
                    <div class="info__sub-header">Requirements</div>
                    <div class="info__text">
                        {{ jobItem.requirements.content }}
                    </div>
                    <ul class="info__list">
                        <li
                            class="info__list-ul"
                            v-for="item in jobItem.requirements.items"
                            :key="item"
                        >
                            {{ item }}
                        </li>
                    </ul>
                    <div class="info__sub-header">What You Will Do</div>
                    <div class="info__text">{{ jobItem.role.content }}</div>
                    <ul class="info__list">
                        <li
                            class="info__list-ol"
                            v-for="(item, name) in jobItem.role.items"
                            :key="item"
                        >
                            {{ item }}
                            <div class="info__list-number">{{ name + 1 }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer" :class="{ footer_dark: theme }" v-if="jobItem">
            <div class="footer__block" :class="{ footer__block_dark: theme }">
                <div class="footer__info">
                    <div
                        :class="{ footer__name_dark: theme }"
                        class="footer__name"
                    >
                        {{ jobItem.position }}
                    </div>
                    <div class="footer__text">So Digital Inc.</div>
                </div>
                <a class="footer__link" :href="jobItem.apply" target="_blank">
                    <button class="footer__btn">Apply Now</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    components: {
        TheHeader,
    },
    data() {
        return {
            jobItem: null,
            jobId: this.$route.params.id - 1,
        };
    },
    methods: {
        ...mapActions({
            getJobs: "jobs/getJobs",
        }),
        ...mapMutations({
            setJobItem: "jobs/setJobItem",
        }),
    },
    computed: {
        ...mapState({
            jobsData: (state) => state.jobs.jobsData,
            theme: (state) => state.theme.theme,
        }),
    },
    created() {
        (async () => {
            await this.getJobs();
            this.jobItem = this.jobsData[this.jobId];
        })();
    },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/colors.scss";

.loading {
    &_dark {
        .loading__text {
            color: #fff;
        }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: flex;
    align-items: center;
    &__text {
        font-size: 24px;
        color: $DarkBlue;
        font-weight: bold;
    }
}

.job {
    padding-bottom: 80px;
}

.title {
    border-radius: 5px;
    margin-bottom: 30px;
    min-height: 140px;
    display: flex;

    align-items: center;
    background-color: #fff;
    position: relative;
    top: -50px;
    @include media("max", "xl") {
        top: -35px;
    }
    @include media("max", "md") {
        top: -20px;
    }
    @include media("max", "sm") {
        flex-direction: column;
    }

    &_dark {
        background-color: $DarkBlue;
    }
    &__logo {
        width: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 140px;
        // padding: 0 10px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        @include media("max", "sm") {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            position: absolute;
            top: -25px;
            padding: 0 5px;
        }
        img {
            width: 100%;
            max-width: 80px;
        }
    }
    &__block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 45px;
        @include media("max", "sm") {
            flex-direction: column;
            padding-top: 50px;
        }
    }
    &__company {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 10px;
        color: $DarkBlue;
        &_dark {
            color: #fff;
        }
    }
    &__site {
        font-size: 16px;
        color: $DarkGrey;
    }
    &__site-btn {
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: $Violet;
        font-weight: bold;
        background-color: #eef0fc;
        border-radius: 5px;
        &:hover {
            background-color: #c5c9f4;
        }
    }
    &__sitebtn_dark {
        background-color: #303642;
        color: #fff;
        &:hover {
            background-color: #535861;
        }
    }
    &__link {
        @include media("max", "sm") {
            margin-top: 50px;
            margin-bottom: 30px;
        }
    }
}
.info {
    padding: 45px;
    background-color: #fff;
    color: $DarkGrey;
    border-radius: 5px;
    &_dark {
        background-color: $DarkBlue;
    }
    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        @include media("max", "sm") {
            flex-direction: column;
        }
    }
    &__name {
        font-size: 28px;
        font-weight: bold;
        color: $DarkBlue;
        margin: 5px 0;
        &_dark {
            color: #fff;
        }
    }
    &__location {
        font-size: 14px;
        color: $Violet;
        font-weight: bold;
    }
    &__apply-btn {
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: #fff;
        font-weight: bold;
        background-color: $Violet;
        border-radius: 5px;
        &:hover {
            background-color: $LightViolet;
        }
        @include media("max", "sm") {
            width: 100%;
        }
    }
    &__text {
        line-height: 2;
    }
    &__sub-header {
        font-size: 20px;
        font-weight: bold;
        color: $DarkBlue;
        margin: 40px 0 25px 0;
    }
    &__list {
        margin-top: 25px;
        li {
            position: relative;
            padding-left: 30px;
            margin-top: 10px;
            line-height: 2;
        }
    }
    &__list-ul::before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: $Violet;
        margin-right: 30px;
    }
    &__list-number {
        position: absolute;
        left: 0;
        top: 0;
        color: $Violet;
        font-weight: bold;
    }
    &__link {
        @include media("max", "sm") {
            margin-top: 50px;
            width: 100%;
        }
    }
}
.footer {
    background-color: #fff;
    height: 95px;
    position: relative;
    width: 100%;
    &__info {
        display: none;
    }
    &_dark {
        background-color: $DarkBlue;
    }
    &__block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        position: absolute;
        max-width: 1200px;
        padding: 0 40px;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &_dark {
            background-color: $DarkBlue;
        }
    }
    &__btn {
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: #fff;
        font-weight: bold;
        background-color: $Violet;
        border-radius: 5px;
        &:hover {
            background-color: $LightViolet;
        }
        @include media("max", "sm") {
            width: 100%;
        }
    }
    &__name {
        font-size: 20px;
        font-weight: bold;
        color: $DarkBlue;
        margin-bottom: 5px;
        &_dark {
            color: #fff;
        }
    }
    &__text {
        color: $DarkGrey;
    }
    &__link {
        @include media("max", "sm") {
            width: 100%;
        }
    }
}
.wrapper_dark {
    background-color: $Midnight;
}

.container_dark {
    background-color: $Midnight;
}
</style>