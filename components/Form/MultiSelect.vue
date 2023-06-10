<template>
    <v-select
        :disabled="disabled"
        height="2.25rem"
        v-model="filter.selected"
        :items="filter.selection"
        dense
        :clearable="true"
        :clear-icon="'mdi-playlist-remove'"
        :prepend-inner-icon="prependIcon"
        hide-details
        multiple
        outlined
        :class="[backgroundClass]"
        class="tw-text-xs tw-rounded-sm tw-shadow-sm"
        placeholder="None Selected">
        <template v-slot:selection="{ item, index }">
            <div v-if="index === 0 && filter.selected.length < 3" class="tw-truncate" :class="placeHolderClass" style="max-width: 90%;" v-text="selectionItems"></div>
            <div v-if="index === 1 && filter.selected.length > 2" class="tw-truncate" :class="placeHolderClass" style="max-width: 90%;" v-text="selectionSummary"></div>
        </template>
        <!-- Icon color matching Jetstream checkbox color : tailwind text-gray-600 rgb(75 85 99) -->
        <template v-slot:prepend-item>
            <div class="tw-flex tw-items-center tw-justify-start tw-px-3" style="min-height: 2.1rem !important;">
                <div class="tw-flex tw-items-center">
                    <v-icon
                        @click="toggleFilterSelection(filter)"
                        :color="filter.selected.length > 0 ? 'rgb(75 85 99)' : 'rgb(107 114 128)'">
                        {{ filterSelectionIcon(filter.selection, filter.selected) }}
                    </v-icon>
                </div>
                <div class="tw-w-full">
                    <FormInput
                        placeholder="Search"
                        :height="'xs'"
                        type="text"
                        class="tw-block tw-w-full"
                        @input="searchFilterSelection(filter)"
                        v-model="filter.search"
                        autocomplete="off" />
                </div>
            </div>
            <div class="tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-gray-300 tw-via-gray-100 tw-to-gray-300"></div>
        </template>
        <template v-slot:item="{ active, item, attrs, on }">
            <v-list-item dense v-on="on" v-bind="attrs" #default="{ active }">
                <v-row dense no-gutters align="center">
                    <Checkbox :height="'sm'" :checked="active" :label="item.text" />
                </v-row>
            </v-list-item>
        </template>
    </v-select>
</template>

<script>
import FormMixin from "@/mixins/form";

export default {
    mixins: [
        FormMixin
    ],

    props: {
        prependIcon: {
            type: String,
            default: 'mdi-form-select'
        },
        placeHolderClass: {
            type: String,
            default: 'tw-text-base'
        },
        filter: {
            type: Object,
            default: function () {
                return {
                    search: '',
                    data: [],
                    selection: [],
                    selected: []
                }
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    mounted() {
    },

    data() {
        return {}
    },

    computed: {
        selectionItems: function(){
            return this.filter.selection.filter((selection) => {
                return this.filter.selected.indexOf(selection.value) >= 0;
            }).map(selection => selection.text).join(", ");
        },

        selectionSummary: function() {
            let summary = '';

            if (this.filter.selected.length < this.filter.selection.length) {
                summary = `${this.filter.selected.length} Selected`;
            } else if (this.filter.selected.length === this.filter.selection.length){
                summary = `All Selected`;
            }

            return summary;
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
