<template>
    <div class="tw-flex tw-items-center">
        <svg
            v-if="checked"
            :class="[heightClass]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"/>
        </svg>
        <svg
            v-else
            :class="[heightClass]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
        </svg>
        <span :class="[fontClass]" class="tw-ml-[0.2rem]">{{label}}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        checked: {
            type: Boolean,
            default: false,
        },
        height: {
            default: null
        }
    },

    computed: {
        heightClass() {
            return {
                [null]: 'tw-h-3.5 tw-w-3.5',
                // 1rem
                'sm': 'tw-h-3.5 tw-w-3.5',
                // 1rem
                'md': 'tw-h-3.5 tw-w-3.5',
                // 1.5rem
                'lg': 'tw-h-6 tw-w-6',
            }[this.height]
        },

        fontClass(){
            return {
                [null]: 'tw-text-base',
                // 0.875rem
                'sm': 'tw-text-sm',
                // 1rem
                'md': 'tw-text-base',
                // 1.25rem
                'lg': 'tw-text-xl'
            }[this.height]
        },
    },
};
</script>

<style scoped>

</style>
