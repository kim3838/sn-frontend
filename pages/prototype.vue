<template>
    <div>
        <div v-if="true" class="tw-max-w-full">
            <v-app class="tw-font-sans">
                <v-container>
                    <div class="tw-space-y-2">
                        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8 tw-font-medium">
                            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                                <Button :height="'xs'">Authenticate</Button>
                            </div>
                            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                                <Button :height="'sm'">Authenticate</Button>
                            </div>
                            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                                <Button :height="'md'">Authenticate</Button>
                            </div>
                            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-w-full tw-border tw-border-neutral-200">
                                <Button :height="'lg'">Authenticate</Button>
                            </div>
                            <div class="tw-col-span-2 tw-flex tw-items-start tw-justify-start tw-block tw-w-full tw-border tw-border-neutral-200">
                                <Button :height="'xl'">Authenticate</Button>
                            </div>
                        </div>

                        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8 tw-font-medium">
                            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                                <label class="tw-flex tw-items-center">
                                    <Checkbox :height="'sm'" :label="'Remember me'" name="remember" />
                                </label>
                            </div>
                            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                                <label class="tw-flex tw-items-center">
                                    <Checkbox :height="'md'" :label="'Remember me'" name="remember" />
                                </label>
                            </div>
                            <div class="tw-col-span-2 tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                                <label class="tw-flex tw-items-center">
                                    <Checkbox :height="'lg'" :label="'Remember me'" name="remember" />
                                </label>
                            </div>
                        </div>

                        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8 tw-font-medium">
                            <div class="tw-block tw-border tw-border-neutral-200">
                                <FormInputLabel :height="'xs'" for="form_input_1" value="XS Label" />
                                <FormInput :height="'xs'" class="tw-w-full" placeholder="Enter username" id="form_input_1" type="text" autofocus autocomplete="off" />
                            </div>
                            <div class="tw-block tw-border tw-border-neutral-200">
                                <FormInputLabel :height="'sm'" for="form_input_2" value="SM Label" />
                                <FormInput :height="'sm'" class="tw-w-full" placeholder="Enter username" id="form_input_2" type="text" autofocus autocomplete="off" />
                            </div>
                            <div class="tw-block tw-border tw-border-neutral-200">
                                <FormInputLabel :height="'md'" for="form_input_3" value="MD Label" />
                                <FormInput :height="'md'" class="tw-w-full" placeholder="Enter username" id="form_input_3" type="text" autofocus autocomplete="off" />
                            </div>
                            <div class="tw-block tw-border tw-border-neutral-200">
                                <FormInputLabel :height="'lg'" for="form_input_4" value="LG Label" />
                                <FormInput :height="'lg'" class="tw-w-full" placeholder="Enter username" id="form_input_4" type="text" autofocus autocomplete="off" />
                            </div>
                            <div class="tw-col-span-2 tw-block tw-border tw-border-neutral-200">
                                <FormInputLabel :height="'xl'" for="form_input_5" value="XL Label" />
                                <FormInput :height="'xl'" class="tw-w-full" placeholder="Enter username" id="form_input_5" type="text" autofocus autocomplete="off" />
                            </div>
                        </div>

                        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8 tw-font-medium">
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

                            <div class="tw-col-span-2 tw-block tw-border tw-border-neutral-200">
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

                            </div>
                        </div>

                        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8 tw-font-medium">
                            <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                                <FormInputLabel value="Static Single Select" />
                                <SingleSelect
                                    place-holder-class="'tw-text-xs'"
                                    v-bind:select-model.sync="filters.location.selected"
                                    :selection="filters.location.selection"/>
                            </div>
                            <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                                <FormInputLabel value="Static Multi Select" />
                                <MultiSelect place-holder-class="'tw-text-xs'" :filter="filters.status"/>
                            </div>
                        </div>

                        <div>
                            <CardSample></CardSample>
                        </div>
                    </div>
                </v-container>
            </v-app>
        </div>
    </div>
</template>

<script>
import DateTimePickerMixin from '~/mixins/datetimepicker';

export default {
    name: "prototype",

    auth: 'guest',

    mixins: [
        DateTimePickerMixin
    ],

    mounted(){

    },

    data(){
        return{
            search: '',
            anotherSearch: '',
            date: this.$moment().format('YYYY-MM-DD'),
            dateTime: this.$moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            monthValue: this.$moment().format('YYYY-MM'),
            monthLabel: this.$moment().format('YYYY MMMM'),
            filters: {
                location : {
                    selection: [
                        {text : 'FOR APPROVAL', value: 0},
                        {text : 'APPROVED', value: 1},
                        {text : 'PROCESSING', value: 2},
                        {text : 'REJECTED', value: 3},
                        {text : 'COMPLETE', value: 4},
                    ],
                    selected: null
                },
                transactions: {
                    selected: null,
                    selection: [
                        {text : 'FOR APPROVAL', value: 0},
                        {text : 'APPROVED', value: 1},
                        {text : 'PROCESSING', value: 2},
                        {text : 'REJECTED', value: 3},
                        {text : 'COMPLETE', value: 4},
                    ]
                },
                status : {
                    search: '',
                    data: [
                        {text : 'FOR APPROVAL', value: 0},
                        {text : 'APPROVED', value: 1},
                        {text : 'PROCESSING', value: 2},
                        {text : 'REJECTED', value: 3},
                        {text : 'COMPLETE', value: 4},
                    ],
                    selection: [
                        {text : 'FOR APPROVAL', value: 0},
                        {text : 'APPROVED', value: 1},
                        {text : 'PROCESSING', value: 2},
                        {text : 'REJECTED', value: 3},
                        {text : 'COMPLETE', value: 4},
                    ],
                    selected: []
                },
                category : {
                    search: '',
                    data: [
                        {text : 'CHARMS', value: 0},
                        {text : 'BRACELETS', value: 1},
                        {text : 'BROOCHES AND PIN', value: 2},
                        {text : 'NECKLACES', value: 3},
                        {text : 'EARRINGS', value: 4},
                        {text : 'RINGS', value: 5},
                        {text : 'POLYESTER', value: 6},
                    ],
                    selection: [
                        {text : 'CHARMS', value: 0},
                        {text : 'BRACELETS', value: 1},
                        {text : 'BROOCHES AND PIN', value: 2},
                        {text : 'NECKLACES', value: 3},
                        {text : 'EARRINGS', value: 4},
                        {text : 'RINGS', value: 5},
                        {text : 'POLYESTER', value: 6},
                    ],
                    selected: []
                },
            },
        }
    },

    watch:{
    }
}
</script>


