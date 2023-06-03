<template>
    <button
        :disabled="disabled"
        :class="[heightClass]"
        :type="type"
        class="tw-inline-flex tw-items-center tw-px-3 tw-py-1.5 tw-bg-gray-600 tw-border tw-border-transparent tw-rounded-sm tw-font-medium tw-text-sm tw-tracking-wide tw-text-white hover:tw-bg-gray-700 active:tw-bg-gray-900 focus:tw-outline-none focus:tw-border-gray-900 focus:tw-ring focus:tw-ring-gray-300 disabled:tw-opacity-25 tw-transition">
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
                    [null]: '',
                    // 1.25rem
                    'xs': 'tw-h-5',
                    // 1.75rem
                    'sm': 'tw-h-7',
                    // 2.25rem
                    'md': 'tw-h-9',
                    // 2.75rem
                    'lg': 'tw-h-11',
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
