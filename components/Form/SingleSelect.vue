<template>
    <v-select
        :disabled="disabled"
        height="2.25rem"
        v-model="computedSelectModel"
        :return-value.sync="computedSelectModel"
        :items="computedSelection"
        item-text="text"
        item-value="value"
        :prepend-inner-icon="prependIcon"
        dense
        hide-details
        outlined
        :class="[backgroundClass]"
        class="tw-text-xs tw-rounded-sm tw-shadow-sm"
        placeholder="None Selected">
        <!-- Icon color matching Jetstream checkbox color : tailwind text-gray-600 rgb(75 85 99) -->
        <template v-slot:prepend-item>
            <div class="tw-bg-transparent tw-flex tw-items-center tw-justify-start tw-px-3" style="min-height: 2.1rem !important;"></div>
            <div class="tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-gray-300 tw-via-gray-100 tw-to-gray-300"></div>
        </template>
        <template v-slot:item="{ active, item, attrs, on }">
            <v-list-item dense v-on="on" v-bind="attrs" #default="{ active }">
                <v-row dense no-gutters align="center">
                    <v-icon class="tw-text-gray-500 tw-h-[1rem] tw-w-[1rem]">mdi-square-small</v-icon>
                    <div class="tw-ml-1 tw-text-sm" v-text="item.text"></div>
                </v-row>
            </v-list-item>
        </template>
    </v-select>
</template>

<script>
export default {
    props: {
        prependIcon: {
            type: String,
            default: 'mdi-form-select'
        },
        placeHolderClass: {
            type: String,
            default: 'tw-text-base'
        },
        selection: {
            type: Array,
            default: function () {
                return []
            }
        },
        selectModel: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    mounted() {
    },

    data() {
        return {
        }
    },

    computed: {

        computedSelection: function(){
            let that = this;

            return [{text : 'None Selected', value: null}].concat(that.selection);
        },

        computedSelectModel: {
            get: function () {
                return this.selectModel;
            },

            set: function (selected) {
                this.$emit('update:select-model', selected);
            }
        },

        backgroundClass: function(){
            return {
                [false] : 'tw-bg-white',
                [true] : 'tw-bg-gray-200'
            }[this.disabled];
        }
    },

    methods: {

    },

    watch: {

    }
}
</script>

<style scoped>

</style>
