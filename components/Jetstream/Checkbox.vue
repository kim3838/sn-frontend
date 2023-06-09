<template>
    <input
        type="checkbox"
        :value="value"
        v-model="proxyChecked"
        :class="[heightClass]"
        class="tw-form-checkbox tw-text-gray-600 tw-shadow-sm tw-border-gray-400 tw-focus:ring focus:tw-ring-gray-200 focus:tw-ring-opacity-50">
</template>

<script>
    export default {
        model: {
            prop: "checked",
            event: "change",
        },

        props: {
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
                    [null]: 'tw-h-4 tw-w-4',
                    // 0.75rem
                    'sm': 'tw-h-3 tw-w-3',
                    // 1rem
                    'md': 'tw-h-3.5 tw-w-3.5',
                    // 1.5rem
                    'lg': 'tw-h-6 tw-w-6',
                }[this.height]
            }

        },
    }
</script>

