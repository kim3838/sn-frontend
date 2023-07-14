<template>
    <span class="tw-flex tw-items-center tw-justify-start tw-cursor-pointer">
        <input
            type="checkbox"
            :value="value"
            v-model="proxyChecked"
            :class="[heightClass, inputClass]"
            class="tw-form-checkbox tw-text-darker tw-border-light focus:tw-ring-transparent focus:tw-border-lighter focus:tw-ring">
        <span :class="[fontClass]" class="tw-ml-1" v-text="label"></span>
    </span>
</template>

<script>
    export default {

        props: {
            label: {
                type: String,
                default: '_',
            },
            checked: {
                type: [Array, Boolean],
                default: false,
            },
            height: {
                default: null
            },
            value: {
                default: null,
            },
        },

        computed: {
            proxyChecked: {
                get() {
                    return this.checked;
                },
                set(val) {
                    this.$emit("change", val);
                },
            },

            heightClass() {
                return {
                    [null]: 'tw-h-3.5 tw-w-3.5',
                    'sm': 'tw-h-3 tw-w-3',
                    'md': 'tw-h-3.5 tw-w-3.5',
                    'lg': 'tw-h-5 tw-w-5',
                }[this.height]
            },

            fontClass(){
                return {
                    [null]: 'tw-text-base tw-font-medium',
                    'sm': 'tw-text-sm',
                    'md': 'tw-text-base tw-font-medium',
                    'lg': 'tw-text-xl tw-font-semibold'
                }[this.height]
            },

            inputClass(){
                return {
                    [null]: '',
                    'sm': '',
                    'md': '',
                    'lg': 'tw-border-2'
                }[this.height]
            },
        },
    }
</script>

