export default {
    mounted() {
        console.log("DateTimePickerMixin mounted");

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
