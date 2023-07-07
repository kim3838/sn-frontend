export default {
    head: {
        script: [
            {src: 'js/common/moment.min.js', defer: true},
            {src: 'js/common/jquery.min.js', defer: true},
            {src: 'js/datetimepicker/index.js', defer: true}
        ]
    },

    mounted() {
        let that = this;

        console.log("DateTimePickerMixin mounted");

        setTimeout(() => {
            console.log("DateTimePickerMixin bootstrap");
            this.bootstrapDateTimePickers(that);
        }, 200);
    },

    methods: {
        bootstrapDateTimePickers(that){
            $('#bootstrapDatePicker').daterangepicker({
                "singleDatePicker": true,
                "showDropdowns": true,
                "autoApply": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            }, function (start, end, label) {

                that.$store.commit('form/setFormFilterValue', {
                    key: 'date',
                    value: start.format('YYYY-MM-DD')
                })
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
            }).on('apply.daterangepicker', function (event, picker) {
                that.$store.commit('form/setFormFilterValue', {
                    key: 'dateTime',
                    value: picker.startDate.format('YYYY-MM-DD HH:mm:ss')
                })
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
            }).on('apply.daterangepicker', function (event, picker) {

                let picked = picker.selectedYear === undefined
                    ? picker.startDate.format('YYYY-MM')
                    : picker.selectedYear + '-' + (picker.selectedMonth + 1);

                let value = that.$moment(picked, 'YYYY-MM-DD').format('YYYY-MM');
                let label = that.$moment(picked, 'YYYY-MM').format('YYYY MMMM');

                that.$store.commit('form/setFormFilterValue', {
                    key: 'monthValue',
                    value: value
                });

                that.$store.commit('form/setFormFilterValue', {
                    key: 'monthLabel',
                    value: label
                })

            });
        }
    }
}
