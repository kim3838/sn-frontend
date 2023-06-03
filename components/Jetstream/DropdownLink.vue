<template>
    <div>
        <button type="submit" class="tw-block tw-w-full tw-px-2 tw-py-1 tw-text-xs tw-leading-5 tw-text-gray-700 tw-text-left hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 tw-transition tw-duration-150 tw-ease-in-out" v-if="as == 'button'">
            <slot></slot>
        </button>

        <NuxtLink :to="to" class="tw-block tw-px-2 tw-py-1 tw-text-xs tw-leading-5 tw-text-gray-700 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 tw-transition tw-duration-150 tw-ease-in-out" v-else>
            <slot></slot>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        props: ['to', 'as']
    }
</script>
