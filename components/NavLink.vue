<template>
    <NuxtLink :to="to" :class="classes">
        <slot></slot>
    </NuxtLink>
</template>

<script>
    export default {
        props: ['to', 'active'],

        computed: {
            classes() {
                return this.active
                            ? 'tw-inline-flex tw-items-center tw-px-1 tw-pt-1 tw-border-b-2 tw-border-gray-400 tw-text-sm tw-font-medium tw-leading-4 tw-text-gray-700 focus:tw-outline-none tw-focus:border-gray-700 tw-transition tw-duration-150 tw-ease-in-out'
                            : 'tw-inline-flex tw-items-center tw-px-1 tw-pt-1 tw-border-b-2 tw-border-transparent tw-text-sm tw-font-medium tw-leading-4 tw-text-gray-500 hover:tw-text-gray-700 hover:tw-border-gray-300 focus:tw-outline-none focus:tw-text-gray-700 focus:tw-border-gray-300 tw-transition tw-duration-150 tw-ease-in-out'
            }
        }
    }
</script>
