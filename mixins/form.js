import moment from "moment";

export default {
    methods:{
        selectedAllFilterModuleOptions(selection, selected) {
            return selected.length === selection.length;
        },

        selectedSomeFilterModuleOptions(selection, selected) {
            return selected.length > 0 && !this.selectedAllFilterModuleOptions(selection, selected);
        },

        filterSelectionIcon(selection, selected){
            if (this.selectedAllFilterModuleOptions(selection, selected)) return 'mdi-close-box'
            if (this.selectedSomeFilterModuleOptions(selection, selected)) return 'mdi-minus-box'
            return 'mdi-text-box-check-outline' //mdi-checkbox-blank-outline
        },

        toggleFilterSelection(filter) {
            this.$nextTick(() => {
                if (this.selectedAllFilterModuleOptions(filter.selection, filter.selected)) {
                    filter.selected = [];
                } else {
                    filter.selected = filter.selection.map(filter => filter.value);
                }
            })
        },

        searchFilterSelection(filter){
            if (!filter.search){
                filter.selection = filter.data;
            }

            filter.selection = filter.data.filter(data => {
                return data.text.toLowerCase().indexOf(filter.search.toLowerCase()) > -1
            })
        },

        formatDate(dateRange){
            return dateRange.length > 1
                ? (moment(dateRange[0]).diff(moment(dateRange[1])) > 0
                    ? moment(dateRange[1]).format('YYYY-MM-DD') + ' - ' + moment(dateRange[0]).format('YYYY-MM-DD')
                    : (moment(dateRange[0]).diff(moment(dateRange[1])) === 0
                        ? moment(dateRange[0]).format('YYYY-MM-DD')
                        : moment(dateRange[0]).format('YYYY-MM-DD') + ' - ' + moment(dateRange[1]).format('YYYY-MM-DD')))
                : moment(dateRange[0]).format('YYYY-MM-DD');
        },

        formatDateTime(dateTime){
            return moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
        },
    }
}
