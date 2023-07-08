<template>
    <v-select
        :disabled="disabled"
        height="2.25rem"
        v-model="serviceBag.selected"
        :items="selection"
        @click="paginate(1, false, true);"
        dense
        :prepend-inner-icon="prependIcon"
        hide-details
        multiple
        outlined
        :class="[backgroundClass]"
        class="paginated-multi-select tw-text-sm tw-rounded-sm tw-shadow-sm"
        :placeholder="selectionSummary">
        <template v-slot:selection="{ item, index , selected}">
            <div v-if="index === 0" class="tw-text-gray-600 tw-truncate" :class="placeHolderClass" style="max-width: 90%;" v-text="selectionSummary"></div>
        </template>
        <template v-slot:prepend-item>
            <div class="tw-flex tw-items-center tw-justify-start tw-px-3" style="min-height: 2.1rem !important;">
                <div class="tw-flex tw-items-center">
                    <v-icon
                        @click="toggleFilterSelection(selection, serviceBag.selected)"
                        :color="serviceBag.selected.length > 0 ? 'rgb(75 85 99)' : 'rgb(107 114 128)'">
                        {{ filterSelectionIcon(selection, serviceBag.selected) }}
                    </v-icon>
                </div>
                <div class="tw-w-full">
                    <FormInput
                        :ring="false"
                        :ref="identifier"
                        placeholder="Search"
                        :height="'xs'"
                        type="text"
                        class="tw-block tw-w-full"
                        v-model="serviceBag.search"
                        autocomplete="off" />
                </div>
            </div>
            <div class="tw-h-px tw-w-full tw-from-lighter tw-via-transparent tw-from-lighter"></div>
            <div class="tw-relative"><v-progress-linear absolute v-if="loading" indeterminate color="rgb(156 163 175)"></v-progress-linear></div>
            <div class="tw-mx-3 tw-mt-[2px] tw-flex tw-items-center tw-justify-between">
                <div class="tw-ml-1 tw-text-xs tw-text-gray-500" v-text="pageInformation[0]"></div>
                <div class="tw-ml-1 tw-text-xs tw-text-gray-500 tw-flex tw-justify-end" v-text="pageInformation[1]"></div>
            </div>
            <div class="tw-mx-3 tw-flex tw-items-center tw-justify-between">
                <div class="tw-flex tw-justify-start tw-space-x-[2px]">
                    <v-icon
                        class="tw-ml-1 tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || serviceBag.selected.length < 1"
                        @click="serviceBag.selected = []"
                        :color="'rgb(107 114 128)'">
                        mdi-playlist-remove
                    </v-icon>
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || serviceBag.selected.length < 1"
                        @click="paginate(1, true)"
                        :color="'rgb(107 114 128)'">
                        mdi-eye-check-outline
                    </v-icon>
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading"
                        @click="paginate()"
                        :color="'rgb(107 114 128)'">
                        mdi-rotate-3d-variant
                    </v-icon>
                </div>
                <div class="tw-flex tw-justify-end tw-space-x-[2px]">
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || atFirstPage"
                        @click="firstPage()"
                        :color="'rgb(107 114 128)'">
                        mdi-page-first
                    </v-icon>
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || atFirstPage"
                        @click="previousPage()"
                        :color="'rgb(107 114 128)'">
                        mdi-chevron-left
                    </v-icon>
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || atLastPage"
                        @click="nextPage()"
                        :color="'rgb(107 114 128)'">
                        mdi-chevron-right
                    </v-icon>
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || atLastPage"
                        @click="lastPage()"
                        :color="'rgb(107 114 128)'">
                        mdi-page-last
                    </v-icon>
                </div>
            </div>
        </template>
        <template v-slot:item="{ active, item, attrs, on }">
            <v-list-item dense v-on="on" v-bind="attrs" #default="{ active }">
                <v-row dense no-gutters align="center">
                    <Checkbox :height="'sm'" :checked="active" :label="item.text" />
                </v-row>
            </v-list-item>
        </template>
        <template v-slot:no-data>
            <div class="tw-px-3">
                <div class="tw-ml-1" v-text="noDataLabel"></div>
            </div>
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
        serviceBag: {
            type: Object,
            default: function () {
                return {
                    search: '',
                    id: [],
                    service: null,
                    payload: () => {
                        return {
                            itemsPerPage: 10,
                            page: 1,
                            filters: {}
                        }
                    },
                    selected: []
                }
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        identifier: {
            type: String,
            default: 'input'
        }
    },

    mounted() {
    },

    data() {
        return {
            loading: false,
            selection: [],
            searchCallBack: null,
            meta: {
                pagination: {
                    count: 0,
                    current_page: 1,
                    per_page: this.serviceBag.payload().itemsPerPage,
                    total: 0,
                    total_pages: 0
                },
            },
        }
    },

    computed: {
        selectionSummary: function() {
            let selectedCount = this.serviceBag.selected.length > 0
                ? this.serviceBag.selected.length
                : 'None';

            return selectedCount + " Selected";
        },

        backgroundClass: function(){
            return {
                [false] : 'tw-bg-white',
                [true] : 'tw-bg-gray-200'
            }[this.disabled];
        },

        noDataLabel: function(){
            return this.loading ? 'Loading...' : 'No Data Available';
        },

        atFirstPage: function(){
            return this.meta.pagination.current_page === 1;
        },

        atLastPage: function(){
            return this.meta.pagination.current_page === this.meta.pagination.total_pages;
        },

        pageInformation: function(){
            let currentPage = this.meta.pagination.current_page;
            let perPage = this.meta.pagination.per_page;
            let totalPages = this.meta.pagination.total_pages;
            let totalRow = this.meta.pagination.total;
            let pageInfo = "Page " + currentPage + " of " + totalPages;
            let showingFirstRowOf = ((currentPage > 1 ? (((currentPage - 1) * perPage) + 1) : currentPage));
            let showingLastRowOf = (currentPage > 1 ? (currentPage === totalPages ? (totalRow) : (currentPage * perPage)) : ((currentPage + perPage) - 1));
            let showing = showingFirstRowOf + "-" + showingLastRowOf + " of " + totalRow;

            return [pageInfo, showing];
        }
    },

    methods: {
        focusOnInput(reference){
            let that = this;

            that.$refs[reference].focus();
        },

        paginate(page = 1, selectedOnly = false, focusOnInput = false){
            let that = this;

            if (that.loading) {
                return false;
            }

            that.loading = true;

            that.selection = [];
            that.meta = Object.assign(that.meta, {
                count: 0,
                current_page: 0,
                per_page: 0,
                total: 0,
                total_pages: 0
            });
            that.meta.pagination.current_page = page;

            if (selectedOnly) {
                that.serviceBag.id = that.serviceBag.selected;
            } else {
                that.serviceBag.id = [];
            }

            let service = that.serviceBag.service({
                itemsPerPage: that.meta.pagination.per_page,
                page: page,
                filters: Object.assign(that.serviceBag.payload().filters, {
                    id: that.serviceBag.id
                })
            });

            that.$axios[service.method](service.url, service.config).then(function (response) {
                that.selection = response.data.values.selection.data;
                that.meta = response.data.values.selection.meta;
                that.loading = false;

                if(focusOnInput){
                    that.focusOnInput(that.identifier);
                }

            }).catch(function (error) {
                that.loading = false;
            });
        },

        selectedAllOfSelection(selection, selected) {
            let selectionValue = selection.map(filter => filter.value);
            let selectedFromCurrentSelection = selected.filter(value => selectionValue.indexOf(value) >= 0);

            return (selectedFromCurrentSelection.length === selection.length) && selection.length > 0;
        },

        filterSelectionIcon(selection, selected){
            if (this.selectedAllOfSelection(selection, selected)) return 'mdi-close-box'
            if (selected.length > 0 && !this.selectedAllOfSelection(selection, selected)) return 'mdi-minus-box'
            return 'mdi-text-box-check-outline'
        },

        toggleFilterSelection(selection, selected) {
            let that = this;

            that.$nextTick(function(){

                if (that.selectedAllOfSelection(selection, selected)) {
                    //Clear Selection From Selected
                    let selectionValue = selection.map(filter => filter.value);

                    that.serviceBag.selected = selected.filter(function(selectedItem){
                        return selectionValue.indexOf(selectedItem) < 0;
                    });
                } else {
                    //Merge Selection To Selected
                    that.serviceBag.selected = that.$_uniq(selected.concat(selection.map(filter => filter.value)));
                }
            })
        },

        nextPage() {
            let that = this;

            let currentPage = that.meta.pagination.current_page;
            let totalPages = that.meta.pagination.total_pages;
            if (totalPages > currentPage && !(that.loading)) {
                let page = currentPage + 1;
                that.paginate(page);
            }
        },

        previousPage() {
            let that = this;

            let currentPage = that.meta.pagination.current_page;
            if (currentPage > 1 && !(that.loading)) {
                let page = currentPage - 1;
                that.paginate(page);
            }
        },

        firstPage() {
            let that = this;

            if (!that.loading) {
                that.paginate(1);
            }
        },

        lastPage() {
            let that = this;

            let totalPages = that.meta.pagination.total_pages;
            if (!that.loading) {
                that.paginate(totalPages);
            }
        },
    },

    watch: {
        'serviceBag.search': {
            handler(search) {
                let that = this;

                // Everytime the user type, clear the 1.5 sec delay before searching
                clearTimeout(that.searchCallBack);

                // Search will trigger after 1.5 sec
                that.searchCallBack = setTimeout(function(){
                    that.paginate();
                }, 1500);
            }
        }
    }
}
</script>

<style scoped>

</style>
