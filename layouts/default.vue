<template>
    <div>
        <v-app>
            <div class="tw-bg-gradient-to-br tw-bg-transparent tw-from-white tw-via-transparent tw-to-light/50">
                <div class="tw-min-h-screen wrapper tw-overflow-x-hidden tw-overflow-y-hidden">

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
        </v-app>

        <ServiceErrorModal></ServiceErrorModal>
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

/* The Close Button */
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
