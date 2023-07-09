<template>
    <div>
        <RadioBox
            class="tw-flex tw-items-center"
            v-for="selection in selections"
            :key="selection.value"
            :value="selection.value"
            :label="selection.text"
            :selected="computedSelected"
            @update-selected="updateSelected"
            :height="size"/>
    </div>
</template>

<script>
export default {
    name: "RadioGroup",

    props: {
        selections: {
            required: true,
            type: Array,
        },
        selected: {
            type: [String, Number],
            default: 0
        },
        size: {
            default: null
        }
    },

    computed: {
        computedSelected: {
            get: function () {
                return this.selected;
            },

            set: function (selected) {
                this.$emit('update:selected', selected);
            }
        },
    },

    methods: {
        updateSelected(selected){
            this.$emit('update:selected', selected);
        }
    }
}
</script>

<style scoped>

</style>
