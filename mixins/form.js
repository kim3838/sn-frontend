import moment from "moment";

export default {
    methods:{
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
