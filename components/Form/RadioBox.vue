<template>
    <label :for="labelId">
        <svg
            v-if="selected == value"
            :class="[heightClass]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"/>
        </svg>
        <svg
            v-else
            :class="[heightClass]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
        </svg>
        <input
            type="radio"
            :value="value"
            :id="labelId"
            @change="valueUpdated"
            name="radio-input"/>
        <span :class="[fontClass]" class="tw-ml-[0.2rem]">{{label}}</span>
    </label>
</template>

<script>
export default {
    name: "RadioBox",

    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 0
        },
        selected: {
            type: [String, Number],
            default: 0
        },
        height: {
            default: null
        }
    },

    computed: {
        labelId(){
            return this.value + '-' +this.label;
        },

        heightClass() {
            return {
                [null]: 'tw-h-3.5 tw-w-3.5',
                // 1rem
                'sm': 'tw-h-3.5 tw-w-3.5',
                // 1rem
                'md': 'tw-h-4 tw-w-4',
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
                'lg': 'tw-text-xl tw-font-semibold'
            }[this.height]
        },
    },

    methods: {
        valueUpdated(event) {
            this.$parent.$emit('input', event.target.value);
            this.$emit('update-selected', event.target.value);
        },
    },
}
</script>

<style scoped>
input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}
</style>
