<template>
    <div class="tw-bg-gradient-to-br tw-bg-transparent tw-from-slate-200/20 tw-via-transparent tw-to-slate-400/50">
        <div class="tw-min-h-screen wrapper tw-overflow-x-hidden tw-overflow-y-hidden">

            <nav
                class="tw-border-b tw-border-gray-100"
                :class="{'lg:tw-ml-sidebar': false}">
                <!-- Primary Navigation Menu -->
                <div class="tw-max-w-full tw-bg-white tw-mx-auto tw-px-2">
                    <div class="tw-flex tw-justify-between tw-h-10">
                        <div class="tw-relative tw-flex">
                            <div class="tw-flex tw-items-center">
                                <button @click="$store.commit('toggleSidebarVisibility')" class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-text-gray-500 tw-transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="tw-stroke-2 tw-h-5 tw-w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Navigation Links -->
                            <div class="tw-hidden tw-space-x-4 lg:tw--my-px lg:tw-ml-10 lg:tw-flex">
                                <NavLink :to="'/prototype'" :active="isRouteActive('prototype')">
                                    Prototype
                                </NavLink>
                                <NavLink :to="'/vuetify'" :active="isRouteActive('vuetify')">
                                    Vuetify
                                </NavLink>
                                <NavLink :to="'/login'" :active="isRouteActive('login')">
                                    Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="content-wrapper tw-transform tw-ease-in-out tw-transition-all tw-duration-200 tw-z-30" :class="{'lg:tw-ml-sidebar': false}">
                <main>
                    <Nuxt/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        isRouteActive(route){
            return [this.$route.path, this.$route.name].indexOf(route) >= 0;
        },
    }
}
</script>

<style>
html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
</style>
