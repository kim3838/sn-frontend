<template>
    <div class="tw-min-h-screen tw-bg-gray-100 wrapper tw-overflow-x-hidden tw-overflow-y-hidden">

        <!-- Page Header -->
        <nav
            class="tw-border-b tw-border-gray-300"
            :class="{'lg:tw-ml-sidebar': sidebarVisibility}">
            <!-- Primary Navigation Menu -->
            <div class="tw-max-w-full tw-bg-white tw-mx-auto tw-px-2">
                <div class="tw-flex tw-justify-between tw-h-10">
                    <div class="tw-relative tw-flex">
                        <div class="tw-flex tw-items-center">
                            <button @click="toggleSidebarVisibility()" class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-text-gray-500 tw-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="tw-stroke-2 tw-h-5 tw-w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </button>
                        </div>

                        <!-- Navigation Links -->
                        <div class="tw-hidden tw-space-x-4 lg:tw--my-px lg:tw-ml-10 lg:tw-flex">
                            <NavLink :to="'/'" :active="isRouteActive('index')">
                                Home
                            </NavLink>

                            <NavLink :to="'/users'" :active="isRouteActive('users')">
                                Users
                            </NavLink>

                            <NavLink :to="'/users/1'" :active="isRouteActive('users-id')">
                                User 1
                            </NavLink>

                            <NavLink v-if="false" :to="'/prototype'" :active="isRouteActive('slug')">
                                Slug
                            </NavLink>
                            <NavLink :to="'/prototype/comments'" :active="isRouteActive('slug-comments')">
                                Slug Comments
                            </NavLink>
                        </div>
                    </div>

                    <div class="tw-relative tw-hidden lg:tw-flex lg:tw-items-center lg:tw-ml-6">
                        <!-- Settings Dropdown -->
                        <div class="tw-ml-3">
                            <client-only>
                                <Dropdown :align="'right'" :width="'60'">
                                    <template #trigger>
                                        <span class="tw-inline-flex tw-rounded-sm">
                                            <button class="tw-bg-transparent tw-inline-flex tw-items-center tw-pl-3 tw-py-1 tw-border tw-border-transparent tw-text-sm tw-leading-4 tw-font-medium tw-text-gray-500 tw-bg-white hover:tw-text-gray-700 focus:tw-outline-none tw-transition">
                                                {{ user.name }}

                                                <svg class="tw-ml-1 tw--mr-0.5 tw-h-4 tw-w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <div class="tw-block tw-px-2 tw-py-1 tw-text-xs tw-text-gray-400">
                                            Manage Account
                                        </div>

                                        <DropdownLink :to="'user/one'">
                                            <div class="tw-flex tw-items-center">
                                                <div class="tw-text-gray-500">Profile</div>
                                            </div>
                                        </DropdownLink>

                                        <div class="tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-gray-300 tw-via-gray-300 tw-to-gray-300"></div>

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button" @click.prevent="logout">
                                                Log Out
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </client-only>
                        </div>
                    </div>

                    <!-- Hamburger -->
                    <div class="tw-relative tw--mr-2 tw-flex tw-items-center lg:tw-hidden">
                        <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-text-gray-400 hover:tw-text-gray-500">
                            <svg class="tw-h-5 tw-w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'tw-hidden': showingNavigationDropdown, 'tw-inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'tw-hidden': ! showingNavigationDropdown, 'tw-inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <Nuxt />
    </div>
</template>

<script>
export default {
    name: "admin",

    mounted() {
        console.log(this.$router.options.routes);
    },

    data() {
        return {
            user: this.$auth.user,
            showingNavigationDropdown: false,
            sidebarVisibility: false
        }
    },

    methods: {
        isRouteActive(route){
            return [this.$route.path, this.$route.name].indexOf(route) >= 0;
        },

        toggleSidebarVisibility(){
            this.sidebarVisibility = !this.sidebarVisibility;
        },

        async logout() {
            await this.$auth.logout()

            await this.$router.push('/login')
        },
    },

    watch: {}
}
</script>
