<template>
    <!-- @change="$emit('update:value', $event)" -->
    <!-- @change="inputValueChanged($event)" -->
    <input
        :disabled="disabled"
        v-on="on"
        :class="[heightClass, backgroundClass]"
        class="tw-form-input tw-text-gray-600 tw-border-gray-300 focus:tw-border-gray-300 focus:tw-ring focus:tw-ring-gray-200 focus:tw-ring-opacity-50 tw-rounded-sm tw-shadow-sm"
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

    methods: {
        focus() {
            this.$refs.input.focus()
        }
    },
}
</script>

