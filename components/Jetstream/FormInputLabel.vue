<template>
    <label :class="[fontClass]" class="tw-leading-4 tw-flex tw-align-start">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot></slot></span>
    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: null
            },
            height: {
                default: null
            },
        },

        computed: {
            fontClass(){
                return {
                    // 1rem
                    [null]: 'tw-text-base',
                    // 0.75rem
                    'xs': 'tw-text-xs',
                    // 0.875rem
                    'sm': 'tw-text-sm',
                    // 1rem
                    'md': 'tw-text-base',
                    // 1.125rem
                    'lg': 'tw-text-lg',
                    // 1.25rem
                    'xl': 'tw-text-xl',
                }[this.height]
            },
        }
    }
</script>
