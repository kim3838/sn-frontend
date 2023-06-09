<template>
    <button
        :disabled="disabled"
        :class="[heightClass, spacingClass, fontClass]"
        :type="type"
        class="tw-inline-flex tw-items-center tw-bg-gray-600 tw-border tw-border-transparent tw-rounded-sm tw-font-medium tw-tracking-wide tw-text-white hover:tw-bg-gray-700 active:tw-bg-gray-900 focus:tw-outline-none focus:tw-border-gray-900 focus:tw-ring focus:tw-ring-gray-300 disabled:tw-opacity-25 tw-transition">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'submit',
            },
            height: {
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            heightClass() {
                return {
                    [null]: 'tw-h-9',
                    // 1.25rem
                    'xs': 'tw-h-5',
                    // 1.75rem
                    'sm': 'tw-h-7',
                    // 2.25rem
                    'md': 'tw-h-9',
                    // 2.75rem
                    'lg': 'tw-h-11',
                    // 3.5rem
                    'xl': 'tw-h-14',
                }[this.height]
            },

            spacingClass() {
                return {
                    [null]: 'tw-px-2 tw-py-1.5',
                    'xs': 'tw-px-1.5 tw-py-1.5',
                    'sm': 'tw-px-1.5 tw-py-1.5',
                    'md': 'tw-px-2 tw-py-1.5',
                    'lg': 'tw-px-3 tw-py-1.5',
                    'xl': 'tw-px-7 tw-py-1.5',
                }[this.height]
            },

            fontClass(){
                return {
                    [null]: 'tw-text-base',
                    // 0.75rem
                    'xs': 'tw-text-xs',
                    // 0.875rem
                    'sm': 'tw-text-sm',
                    // 1rem
                    'md': 'tw-text-base',
                    // 1.25rem
                    'lg': 'tw-text-xl',
                    // 1.5rem
                    'xl': 'tw-text-2xl',
                }[this.height]
            },

            backgroundClass: function(){
                return {
                    [false] : 'tw-bg-white',
                    [true] : 'tw-bg-gray-200'
                }[this.disabled];
            }
        },
    }
</script>
