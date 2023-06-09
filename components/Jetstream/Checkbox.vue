<template>
    <span class="tw-inline-flex tw-items-center tw-justify-start">
        <input
            type="checkbox"
            :value="value"
            v-model="proxyChecked"
            :class="[heightClass]"
            class="tw-form-checkbox tw-text-gray-600 tw-shadow-sm tw-border-gray-400 tw-focus:ring focus:tw-ring-gray-200 focus:tw-ring-opacity-50">
        <span :class="[fontClass]" class="tw-ml-2px">{{label}}</span>
    </span>
</template>

<script>
    export default {
        model: {
            prop: "checked",
            event: "change",
        },

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
                    // 0.75rem
                    'sm': 'tw-h-3 tw-w-3',
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
    }
</script>

