<template>
    <!-- @change="$emit('update:value', $event)" -->
    <!-- @change="inputValueChanged($event)" -->
    <input
        :disabled="disabled"
        v-on="on"
        :class="[fontClass, heightClass, backgroundClass]"
        class="tw-pl-1 tw-form-input tw-border-neutral-200 focus:tw-border-light focus:tw-ring focus:tw-ring-light focus:tw-ring-opacity-25 tw-rounded-sm tw-shadow-sm"
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
        }
    },

    computed: {
        heightClass() {
            return {
                // 2.25rem
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
                // 4rem
                '2xl' : 'tw-h-16',
                // 5rem
                '3xl' : 'tw-h-20',
            }[this.height]
        },

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
                // 1.875rem
                '2xl': 'tw-text-3xl',
                // 3rem
                '3xl': 'tw-text-5xl',
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

