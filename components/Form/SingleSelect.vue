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
        class="tw-text-sm tw-rounded-sm tw-shadow-sm"
        placeholder="None Selected">

        <template v-slot:prepend-item>
            <div class="tw-bg-transparent tw-flex tw-items-center tw-justify-start tw-px-3" style="min-height: 2.1rem !important;"></div>
            <div class="tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-gray-300 tw-via-gray-100 tw-to-gray-300"></div>
        </template>
        <template v-slot:item="{ active, item, attrs, on }">
            <v-list-item dense v-on="on" v-bind="attrs" #default="{ active }">
                <v-row dense no-gutters align="center">
                    <svg v-if="active" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
                    </svg>
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
