<template>
    <button
        :disabled="disabled"
        :class="[heightClass, spacingClass, fontClass]"
        :type="type"
        class="
            tw-inline-flex
            tw-items-center
            tw-bg-darker
            tw-rounded-sm
            tw-font-medium
            tw-tracking-wide
            tw-text-white
            hover:tw-bg-darker/90
            active:tw-bg-darker/90
            focus:tw-outline-none
            focus:tw-border-light
            focus:tw-ring
            focus:tw-ring-light
            disabled:tw-opacity-60
            tw-transition
            tw-relative">
        <div
            class="
                shade
                tw-rounded-sm
                tw-bg-gradient-to-br
                tw-bg-transparent
                tw-from-dark/90
                tw-via-transparent
                tw-to-dark/50"></div>
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

<style scoped>
.shade{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
