export default {
    mounted() {
        console.log("DateTimePickerMixin mounted");

        $('#bootstrapDatePicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoApply": true,
            locale: {
                format: 'YYYY-MM-DD'
            }
        }, function(start, end, label) {
            console.log({value : start.format('YYYY-MM-DD')});
            // window.VueApp.$store.commit('setFormFilterValue', {
            //     key: 'date',
            //     value: start.format('YYYY-MM-DD')
            // })
        });

        $('#bootstrapDateTimePicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "timePicker": true,
            "timePicker24Hour": true,
            "timePickerSeconds": true,
            "autoApply": false,
            "autoUpdateInput": false,
            locale: {
                format: 'YYYY-MM-DD HH:mm:ss'
            }
        }).on('apply.daterangepicker', function(event, picker){
            console.log({value : picker.startDate.format('YYYY-MM-DD HH:mm:ss')});
            // window.VueApp.$store.commit('setFormFilterValue', {
            //     key: 'dateTime',
            //     value: picker.startDate.format('YYYY-MM-DD HH:mm:ss')
            // })
        });

        $('#bootstrapMonthPicker').daterangepicker({
            "monthPicker": true,
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoApply": false,
            "autoUpdateInput": false,
            "locale": {
                "format": "YYYY MMMM",
                "monthNames": [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                "firstDay": 1
            }
        }).on('apply.daterangepicker', function(event, picker){

            let picked = picker.selectedYear === undefined
                ? picker.startDate.format('YYYY-MM')
                : picker.selectedYear + '-' + (picker.selectedMonth + 1);

            let value = moment(picked, 'YYYY-MM-DD').format('YYYY-MM');
            let label = moment(picked, 'YYYY-MM').format('YYYY MMMM');

            console.log({[label] : value});

            // window.VueApp.$store.commit('setFormFilterValue', {
            //     key: 'monthValue',
            //     value: value
            // });
            //
            // window.VueApp.$store.commit('setFormFilterValue', {
            //     key: 'monthLabel',
            //     value: label
            // })

        });
    },
    created() {
        console.log("DateTimePickerMixin created");
    },
    beforeCreate() {
        console.log("DateTimePickerMixin before create");
    },
    beforeMount() {
        console.log("DateTimePickerMixin before mount");
    }
}
