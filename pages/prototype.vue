<template>
    <div class="tw-max-w-full tw-m-2 tw-p-2 tw-border tw-border-light">
        <div class="tw-space-y-2">
            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8">
                <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                    <Button :height="'xs'"><span class="tw-font-medium">Button Label</span></Button>
                </div>
                <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                    <Button :height="'sm'"><span class="tw-font-semibold">Authenticate</span></Button>
                </div>
                <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                    <Button :height="'md'"><span class="tw-font-semibold">Add to cart</span></Button>
                </div>
                <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                    <Button :disabled="true"><span class="tw-font-semibold">Disabled</span></Button>
                </div>
                <div class="tw-flex tw-items-start tw-justify-start tw-block tw-w-full tw-border tw-border-neutral-200">
                    <Button :height="'lg'"><span class="tw-font-semibold">SKIP</span></Button>
                </div>
                <div class="tw-col-span-2 tw-flex tw-items-start tw-justify-start tw-block tw-w-full tw-border tw-border-neutral-200">
                    <Button :height="'xl'"><span class="tw-font-semibold">Authenticate</span></Button>
                </div>
            </div>

            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8 tw-font-normal">
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

            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8">
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

            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8">
                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel for="bootstrapDatePicker" value="Date" />
                    <FormInput
                        :height="'sm'"
                        class="tw-w-full"
                        type="text"
                        id="bootstrapDatePicker"
                        v-model="$store.state.form.filters.date"
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
                        v-model="$store.state.form.filters.dateTime"
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
                        v-model="$store.state.form.filters.monthLabel"
                        autocomplete="off"
                        :disabled="false" />
                </div>

                <div class="tw-block tw-border tw-border-neutral-200">

                </div>
            </div>

            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8">
                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel value="Static Single Select" />
                    <SingleSelect
                        :prepend-icon="'mdi-book-information-variant'"
                        v-bind:select-model.sync="filters.location.selected"
                        :selection="filters.location.selection"/>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel value="Static Multi Select" />
                    <MultiSelect
                        :prepend-icon="'mdi-food-kosher'"
                        :filter="filters.category"/>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200">
                    <FormInputLabel value="Single Select Paginated" />
                        <SingleSelectPaginated
                            v-if="false"
                            :identifier="'singleSelectPaginatedPrototype'"
                            place-holder-class="'tw-text-xs'"
                            :prepend-icon="'mdi-food-kosher'"
                            :service-bag="filters.singleSelectPaginatedPrototype"
                            :disabled="false"/>
                </div>
            </div>

            <div v-if="false">
                <CardSample></CardSample>
            </div>

            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8">
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-sm tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-base tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-lg tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-xl tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
            </div>

            <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-8">
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-sm tw-font-thin tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-extralight tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-light tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-normal tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-medium tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-semibold tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-bold tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-extrabold tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-sm tw-font-black tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-base tw-font-thin tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-extralight tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-light tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-normal tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-medium tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-semibold tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-bold tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-extrabold tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-base tw-font-black tw-leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-lg tw-font-thin tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-extralight tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-light tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-normal tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-medium tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-semibold tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-bold tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-extrabold tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-lg tw-font-black tw-leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
                <div class="tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                    <p class="tw-text-xl tw-font-extralight tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-light tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-normal tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-medium tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-semibold tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-bold tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-extrabold tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                    <p class="tw-text-xl tw-font-black tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec facilisis lacus. Phasellus convallis commodo lorem. Nam vitae dignissim elit.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DateTimePickerMixin from '~/mixins/datetimepicker';
import PrototypeService from "@/services/PrototypeService";

export default {
    name: "prototype",

    auth: 'guest',

    mixins: [
        DateTimePickerMixin
    ],

    mounted(){
        let that = this;

        console.log(that.$_capitalize('Lodash Hello'));

        // setTimeout(function(){
        //     let servicePayload = PrototypeService.selection;
        //
        //     let payload = servicePayload();
        //     let service = that.$axios[payload.method](payload.url, payload.config);
        //
        //     service.then(function (response) {
        //         console.log({"PrototypeService Response" : response});
        //     }).catch(function (error) {
        //         console.error(error.response);
        //     });
        // }, 4000);

        //this.service = PrototypeService.selection(this);

        // this.service.then(function (response) {
        //
        // }).catch(function (error) {
        //     console.error(error.response);
        // });
    },

    data(){
        return{
            search: '',
            anotherSearch: '',
            filters: {
                singleSelectPaginatedPrototype : {
                    search: '',
                    id: [],
                    service: PrototypeService.selection,
                    payload: () => {
                        return {
                            itemsPerPage: 10,
                            page: 1,
                            filters: {
                                search: '',
                                location_id : []
                            }
                        }
                    },
                    selected: null,
                    selected_item: null
                },
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
                }
            },
        }
    },

    watch:{
    }
}
</script>


