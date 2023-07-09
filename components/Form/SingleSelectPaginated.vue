<template>
    <v-select
        :disabled="disabled"
        height="2.25rem"
        v-model="serviceBag.selected"
        :items="selection"
        @click="paginate(1, false, true);"
        @change="selected()"
        dense
        :prepend-inner-icon="prependIcon"
        hide-details
        outlined
        :class="[backgroundClass]"
        class="paginated-multi-select tw-text-sm tw-rounded-sm tw-shadow-sm"
        :placeholder="selectionSummary">
        <template v-slot:selection="{ item, index , selected}">
            <div v-if="index === 0" class="tw-truncate" :class="placeHolderClass" style="max-width: 90%;" v-text="selectionSummary"></div>
        </template>
        <template v-slot:prepend-item>
            <div class="tw-flex tw-items-center tw-justify-start tw-px-3" style="min-height: 2.1rem !important;">
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
            <div class="tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-lighter tw-via-transparent tw-to-lighter"></div>
            <div class="tw-relative"><v-progress-linear absolute v-if="loading" indeterminate color="#646464"></v-progress-linear></div>
            <div class="tw-mx-3 tw-mt-[2px] tw-flex tw-items-center tw-justify-between">
                <div class="tw-ml-1 tw-text-xs" v-text="pageInformation[0]"></div>
                <div class="tw-ml-1 tw-text-xs tw-flex tw-justify-end" v-text="pageInformation[1]"></div>
            </div>
            <div class="tw-mx-3 tw-flex tw-items-center tw-justify-between">
                <div class="tw-flex tw-justify-start tw-space-x-[2px]">
                    <v-icon
                        class="tw-ml-1 tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || $_isNull(serviceBag.selected)"
                        @click="serviceBag.selected = null; serviceBag.selected_item = null;"
                        :color="'rgb(107 114 128)'">
                        mdi-playlist-remove
                    </v-icon>
                    <v-icon
                        class="tw-border tw-border-neutral-200"
                        dense
                        :disabled="loading || $_isNull(serviceBag.selected)"
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
                    <svg v-if="active" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
                    </svg>

                    <div v-if="$_get(item, 'select_item_type', false) === 'ENUMS.SELECTION_TYPE.PREPAID_HOLDER'" class="tw-ml-1 tw-flex tw-items-center tw-text-sm">
                        <span :class="[$_get(item, 'title_class', ''), '']" v-text="item.title"></span>
                        <span class="tw-ml-1" v-text="$_get(item, 'sub_title', '')"></span>
                    </div>
                    <div v-else class="tw-ml-[0.2rem] tw-text-sm" v-text="item.text"></div>
                </v-row>
            </v-list-item>
        </template>
        <template v-slot:no-data>
            <div class="tw-px-3">
                <div class="tw-ml-1 tw-text-sm" v-text="noDataLabel"></div>
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
                    selected: null,
                    selected_item: null
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
            return this.$_get(this.serviceBag.selected_item, 'text', 'None Selected');
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
        selected(){
            this.serviceBag.selected_item = this.selection.filter(item => [this.serviceBag.selected].indexOf(item.value) >= 0)[0];
        },

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
                that.serviceBag.id = [that.serviceBag.selected];
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
