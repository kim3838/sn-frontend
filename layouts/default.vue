<template>
    <div class="tw-relative">
        <nav
            class="tw-border-b tw-border-neutral-200"
            :class="{'lg:tw-ml-sidebar': false}">
            <!-- Primary Navigation Menu -->
            <div class="tw-max-w-full tw-bg-white tw-mx-auto tw-px-2">
                <div class="tw-flex tw-justify-center tw-h-10">
                    <div class="tw-relative tw-flex">
                        <!-- Navigation Links -->
                        <div class="tw-hidden tw-space-x-4 lg:tw--my-px lg:tw-ml-10 lg:tw-flex">
                            <NavLink :to="'/prototype'" :active="isRouteActive('prototype')">
                                Prototype
                            </NavLink>
                            <NavLink :to="'/login'" :active="isRouteActive('login')">
                                Login
                            </NavLink>
                            <NavLink :to="'/'" :active="isRouteActive('index')">
                                Home
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="tw-transform tw-ease-in-out tw-transition-all tw-duration-200 tw-z-20" :class="{'lg:tw-ml-sidebar': false}">
            <main class="tw-relative">
                <v-app>
                    <Nuxt/>
                </v-app>
            </main>
        </div>

        <ServiceErrorModal></ServiceErrorModal>
    </div>
</template>

<script>
export default {
    name: "default",

    methods:{
        isRouteActive(route){
            return [this.$route.path, this.$route.name].indexOf(route) >= 0;
        },
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 200)
        })
    },

    data() {
        return {

        }
    }
}
</script>

<style>

.loading{
    position: absolute;
    min-height:calc(100vh);
    width: 100%;
}


.close {
    color: #aaaaaa;
    font-size: 38px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>
