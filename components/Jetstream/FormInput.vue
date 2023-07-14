<template>
    <input
        :disabled="disabled"
        v-on="on"
        :class="[fontClass, heightClass, backgroundClass, ring ? 'focus:tw-ring-light focus:tw-ring-opacity-25' : 'focus:tw-ring-transparent']"
        class="tw-pl-1 tw-form-input tw-border tw-border-neutral-200 tw-rounded-sm focus:tw-border-lighter focus:tw-ring"
        :value="value"
        @input="$emit('input', $event.target.value)"
        ref="input">
</template>

<script>
export default {
    props: {
        value: String,
        on: null,
        height: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        ring: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        heightClass() {
            return {
                [null]: 'tw-h-9',
                'xs': 'tw-h-5',
                'sm': 'tw-h-7',
                'md': 'tw-h-9',
                'lg': 'tw-h-11',
                'xl': 'tw-h-14',
                '2xl' : 'tw-h-16',
                '3xl' : 'tw-h-20',
            }[this.height]
        },

        fontClass(){
            return {
                [null]: 'tw-text-base',
                'xs': 'tw-text-xs',
                'sm': 'tw-text-sm',
                'md': 'tw-text-base tw-font-semibold',
                'lg': 'tw-text-lg tw-font-semibold',
                'xl': 'tw-text-xl tw-font-semibold',
                '2xl': 'tw-text-3xl tw-font-bold',
                '3xl': 'tw-text-5xl tw-font-bold',
            }[this.height]
        },

        backgroundClass: function(){
            return {
                [false] : 'tw-bg-white',
                [true] : 'tw-bg-gray-200'
            }[this.disabled];
        }
    },

    methods: {
        focus() {
            this.$refs.input.focus()
        }
    },
}
</script>

