<template>
    <div class="wrapper" :class="{ wrapper_dark: theme }">
        <div
            class="modal"
            :class="{ modal_dark: theme }"
            v-if="modal"
            @click="modal = false"
        >
            <div class="modal__window">
                <div class="modal__location" @click.stop="">
                    <div class="modal__icon">
                        <img src="@/assets/desktop/icon-location.svg" alt="" />
                    </div>
                    <input
                        v-model="locationSearch"
                        placeholder="Filter by location…"
                        type="text"
                    />
                </div>
                <label>
                    <div class="search__option" @click.stop="">
                        <div class="search__checkbox">
                            <input v-model="fullTimeMark" type="checkbox" />
                            <div
                                class="search__box"
                                :class="{
                                    search__box_checked: fullTimeMark,
                                }"
                            >
                                <img
                                    class="search__mark"
                                    :class="{
                                        search__mark_checked: fullTimeMark,
                                    }"
                                    src="@/assets/desktop/icon-check.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="search__checkbox-text">Full Time Only</div>
                    </div>
                </label>
                <button @click="jobSearch" class="modal__btn">Search</button>
            </div>
        </div>
        <the-header />
        <div class="container" :class="{ container_dark: theme }">
            <div class="search" :class="{ search_dark: theme }">
                <div class="search__title">
                    <div class="search__icon">
                        <img src="@/assets/desktop/icon-search.svg" alt="" />
                    </div>
                    <input
                        ref="input"
                        class="search__input"
                        placeholder="Filter by title, companies, expertise…"
                        type="text"
                        v-model="titleSearch"
                    />
                    <div class="search__mobile">
                        <div @click="modal = true" class="search__filter">
                            <img src="@/assets/mobile/icon-filter.svg" alt="" />
                        </div>
                        <div @click="jobSearch" class="search__icon_mobile">
                            <img
                                src="@/assets/desktop/icon-search_dark.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="search__location">
                    <div class="search__icon">
                        <img src="@/assets/desktop/icon-location.svg" alt="" />
                    </div>
                    <input
                        class="search__input"
                        placeholder="Filter by location…"
                        type="text"
                        v-model="locationSearch"
                    />
                </div>
                <div class="search__time">
                    <label>
                        <div class="search__option">
                            <div class="search__checkbox">
                                <input v-model="fullTimeMark" type="checkbox" />
                                <div
                                    class="search__box"
                                    :class="{
                                        search__box_checked: fullTimeMark,
                                    }"
                                >
                                    <img
                                        class="search__mark"
                                        :class="{
                                            search__mark_checked: fullTimeMark,
                                        }"
                                        src="@/assets/desktop/icon-check.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="search__checkbox-text">
                                Full Time Only
                            </div>
                        </div>
                    </label>
                    <button @click="jobSearch" class="search__btn">
                        Search
                    </button>
                </div>
            </div>
            <div class="jobs" v-if="jobsData">
                <div
                    class="jobs__item"
                    :class="{ jobs__item_dark: theme }"
                    v-for="job in currentJobs"
                    :key="job.id"
                    @click="openJobInfo(job)"
                >
                    <div
                        :style="{ backgroundColor: job.logoBackground }"
                        class="jobs__logo"
                    >
                        <img :src="job.logo" alt="" />
                    </div>
                    <div class="jobs__info">
                        <div class="jobs__time">
                            <span>{{ job.postedAt }}</span>
                            <span>&ensp;&bull;&ensp;</span>
                            <span>{{ job.contract }}</span>
                        </div>
                        <div
                            class="jobs__name"
                            :class="{ jobs__name_dark: theme }"
                        >
                            {{ job.position }}
                        </div>
                        <div class="jobs__company">{{ job.company }}</div>
                        <div class="jobs__location">{{ job.location }}</div>
                    </div>
                </div>
            </div>
            <button @click="loadMore" class="load">Load More</button>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    components: {
        TheHeader,
    },
    data() {
        return {
            currentJobs: null,
            showJobs: null,
            filteredJobs: null,
            fullTimeMark: false,
            titleSearch: null,
            locationSearch: null,
            modal: false,
        };
    },
    methods: {
        ...mapActions({
            getJobs: "jobs/getJobs",
        }),
        ...mapMutations({
            getClientWidth: "jobs/getClientWidth",
        }),
        changePlaceholer() {
            if (this.clientWidth < 992) {
                this.$refs.input.placeholder = "Filter by title…";
            }
        },
        openJobInfo(job) {
            this.$router.push({
                name: "jobInfo",
                params: {
                    id: job.id,
                },
            });
        },
        setJobsShow() {
            this.showJobs = this.jobsData.filter((item, index) => index < 12);
            this.currentJobs = this.showJobs;
            this.filteredJobs = null;
        },
        loadMore() {
            this.currentJobs = this.jobsData;
            this.filteredJobs = this.jobsData;
            this.searchedTitle(this.filteredJobs);
            this.searchedLocation(this.filteredJobs);
            this.searchedFulltime(this.filteredJobs);
            this.currentJobs = this.filteredJobs;
            this.filteredJobs = this.jobsData;
        },
        searchedTitle(initial) {
            if (this.titleSearch) {
                this.filteredJobs = initial.filter((item) => {
                    return item.position
                        .toLowerCase()
                        .includes(this.titleSearch.toLowerCase());
                });
            }
        },
        searchedLocation(initial) {
            if (this.locationSearch) {
                this.filteredJobs = initial.filter((item) => {
                    return item.location
                        .toLowerCase()
                        .includes(this.locationSearch.toLowerCase());
                });
            }
        },
        searchedFulltime(initial) {
            if (this.fullTimeMark) {
                this.filteredJobs = initial.filter((item) => {
                    return item.contract == "Full Time";
                });
            }
        },
        jobSearch() {
            if (
                !this.titleSearch &&
                !this.locationSearch &&
                !this.fullTimeMark
            ) {
                this.setJobsShow();
            } else if (this.filteredJobs == this.jobsData) {
                this.searchedTitle(this.filteredJobs);
                this.searchedLocation(this.filteredJobs);
                this.searchedFulltime(this.filteredJobs);
                this.currentJobs = this.filteredJobs;
                this.filteredJobs = this.jobsData;
            } else if (this.filteredJobs == null) {
                this.filteredJobs = this.showJobs;
                this.searchedTitle(this.filteredJobs);
                this.searchedLocation(this.filteredJobs);
                this.searchedFulltime(this.filteredJobs);
                this.currentJobs = this.filteredJobs;
                this.filteredJobs = null;
            }
        },
    },
    computed: {
        ...mapState({
            jobsData: (state) => state.jobs.jobsData,
            theme: (state) => state.theme.theme,
            clientWidth: (state) => state.jobs.clientWidth,
        }),
    },
    created() {
        (async () => {
            await this.getJobs();
            this.setJobsShow();
        })();
    },
    mounted() {
        this.getClientWidth();
        this.changePlaceholer();
    },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/colors.scss";

.modal {
    &_dark {
        .modal__window {
            background-color: $DarkBlue;
            input {
                background-color: inherit;
                color: #fff;
            }
            .search__box {
                background-color: #313743;
            }
            .search__checkbox-text {
                color: #fff;
            }
        }
        .modal__location {
            border-color: #28313f;
        }
    }
    width: 100vw;
    height: 100vh;
    background-color: rgb(0%, 0%, 0%, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    &__window {
        background-color: #fff;
        border-radius: 5px;
        padding: 25px;
        width: 50%;
        @include media("max", "sm") {
            width: auto;
        }
    }
    &__location {
        display: flex;
        border-bottom: 1px solid #eceff1;
        padding-bottom: 25px;
        input {
            margin-left: 15px;
            font-size: 16px;
        }
    }
    &__btn {
        height: 50px;
        max-width: 100%;
        width: 100%;
        background-color: $Violet;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
}

.search {
    &_dark {
        background-color: $DarkBlue;
        .search__checkbox-text {
            color: #fff;
        }
        .search__input {
            background-color: $DarkBlue;
            color: #fff;
        }
        .search__box {
            background-color: #313743;
        }
        .search__location {
            border-color: #28313f;
        }
    }
    height: 80px;
    position: relative;
    top: -40px;
    border-radius: 5px;
    background-color: #fff;
    width: 100%;
    display: flex;
    &__mobile {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    &__title {
        width: 40%;
        display: flex;
        padding: 15px;
        justify-content: space-between;
        align-items: center;
        @include media("max", "lg") {
            width: 30%;
        }
        @include media("max", "md") {
            width: 100%;
        }
    }
    &__input {
        font-size: 16px;
        max-width: 100%;
        width: 100%;
        color: $DarkBlue;
        @include media("max", "md") {
            width: 80%;
        }
    }
    &__location {
        width: 30%;
        display: flex;
        padding: 15px;
        align-items: center;
        border-right: 1px solid #eceff1;
        border-left: 1px solid #eceff1;
        @include media("max", "md") {
            display: none;
        }
        input {
            font-size: 16px;
            max-width: 100%;
            width: 100%;
        }
    }
    &__time {
        width: 30%;
        display: flex;
        padding: 15px;
        align-items: center;
        justify-content: space-between;
        @include media("max", "lg") {
            width: 40%;
        }
        @include media("max", "md") {
            display: none;
        }
    }
    &__btn {
        max-width: 140px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
        background-color: $Violet;
        border-radius: 5px;
        &:hover {
            background-color: $LightViolet;
        }
    }
    &__icon {
        margin-right: 15px;
        @include media("max", "md") {
            display: none;
        }
        &_mobile {
            display: none;
            width: 48px;
            height: 48px;
            border-radius: 5px;
            background-color: $Violet;
            align-items: center;
            justify-content: center;
            margin-left: 25px;
            @include media("max", "md") {
                display: flex;
            }
        }
    }
    &__mobile {
        display: none;
        @include media("max", "md") {
            display: flex;
        }
    }
    &__option {
        display: flex;
        cursor: pointer;
        @include media("max", "md") {
            margin: 25px 0;
        }
    }
    &__checkbox {
        input {
            display: none;
        }
    }
    &__checkbox-text {
        color: $DarkBlue;
        font-weight: bold;
        margin: 0 15px;
        white-space: nowrap;
        @include media("max", "md") {
            margin-right: 0;
        }
    }
    &__box {
        width: 24px;
        height: 24px;
        background-color: #e7e8e9;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        &_checked {
            background-color: $Violet !important;
        }
    }
    &__mark {
        display: none;
        &_checked {
            display: block;
        }
    }
}

.jobs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 120px;
    &__item {
        width: 30%;
        background-color: #fff;
        margin-bottom: 65px;
        position: relative;
        color: $DarkGrey;
        border-radius: 5px;
        cursor: pointer;
        @include media("max", "lg") {
            width: 45%;
        }
        @include media("max", "sm") {
            width: 100%;
        }
        &_dark {
            background-color: $DarkBlue;
        }
    }
    &__logo {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        position: absolute;
        left: 32px;
        top: -25px;
    }
    &__info {
        margin: 50px 30px 0 30px;
    }
    &__name {
        color: $DarkBlue;
        font-weight: bold;
        font-size: 20px;
        margin: 15px 0;
        &_dark {
            color: #fff;
        }
    }
    &__location {
        color: $Violet;
        font-weight: bold;
        font-size: 14px;
        margin-top: 45px;
        padding-bottom: 35px;
    }
}
.load {
    width: 140px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #fff;
    font-weight: bold;
    background-color: $Violet;
    margin-top: 55px;
    border-radius: 5px;
    &:hover {
        background-color: $LightViolet;
    }
}
.container_dark {
    background-color: $Midnight;
}
.wrapper {
    position: relative;
    padding-bottom: 100px;
    z-index: 1;
    &_dark {
        background-color: $Midnight;
    }
}
</style>