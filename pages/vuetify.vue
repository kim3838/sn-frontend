<template>
    <v-container fluid>
        <div class="tw-space-y-2">
            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 2xl:tw-grid-cols-8 tw-font-medium">
                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel for="bootstrapDatePicker" value="Date" />
                    <FormInput
                        :height="'sm'"
                        class="tw-w-full"
                        type="text"
                        id="bootstrapDatePicker"
                        v-model="dateTime"
                        autocomplete="off"
                        :disabled="false" />
                </div>

                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel for="bootstrapDateTimePicker" value="DateTime" />
                    <FormInput
                        :height="'sm'"
                        class="tw-w-full"
                        type="text"
                        id="bootstrapDateTimePicker"
                        v-model="dateTime"
                        autocomplete="off"
                        :disabled="false" />
                </div>

                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel for="bootstrapMonthPicker" value="Month" />
                    <FormInput
                        :height="'sm'"
                        class="tw-w-full"
                        type="text"
                        id="bootstrapMonthPicker"
                        v-model="monthLabel"
                        autocomplete="off"
                        :disabled="false" />
                </div>

                <div class="tw-block tw-border tw-border-neutral-200">
                    <v-btn color="primary">Hello Vuetify!</v-btn>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import DateTimePickerMixin from '~/mixins/datetimepicker';

export default {
    name: "vuetify",

    auth: 'guest',

    mixins: [
        DateTimePickerMixin
    ],

    mounted(){

    },

    data(){
        return{
            date: this.$moment().format('YYYY-MM-DD'),
            dateTime: this.$moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            monthValue: this.$moment().format('YYYY-MM'),
            monthLabel: this.$moment().format('YYYY MMMM'),
        }
    },

    methods:{
    },

    watch:{
    }
}
</script>

<style scoped>

</style>
