<template>
    <div class="tw-space-y-2">
        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 2xl:tw-grid-cols-8 tw-font-medium">
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
        </div>

        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 2xl:tw-grid-cols-8 tw-font-medium">
            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center">
                    <Checkbox :height="'sm'" name="remember" />
                    <span class="tw-ml-2 tw-text-xs">Remember me</span>
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center">
                    <Checkbox :height="'md'" name="remember" />
                    <span class="tw-ml-2 tw-text-xs">Remember me</span>
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center">
                    <Checkbox name="remember" />
                    <span class="tw-ml-2 tw-text-xs">Remember me</span>
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center">
                    <Checkbox :height="'lg'" name="remember" />
                    <span class="tw-ml-2 tw-text-xs">Remember me</span>
                </label>
            </div>
        </div>

        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 2xl:tw-grid-cols-8 tw-font-medium">
            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_1" value="xs" />
                    <FormInput :height="'xs'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_1" type="text" autofocus autocomplete="off" />
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_2" value="sm" />
                    <FormInput :height="'sm'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_2" type="text" autofocus autocomplete="off" />
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_3" value="md" />
                    <FormInput :height="'md'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_3" type="text" autofocus autocomplete="off" />
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_4" value="lg" />
                    <FormInput :height="'lg'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_4" type="text" autofocus autocomplete="off" />
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_5" value="xl" />
                    <FormInput :height="'xl'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_5" type="text" autofocus autocomplete="off" />
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_6" value="2xl" />
                    <FormInput :height="'2xl'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_6" type="text" autofocus autocomplete="off" />
                </label>
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200 tw-col-span-2">
                <label class="tw-flex tw-items-center tw-w-full">
                    <FormInputLabel for="form_input_7" value="3xl" />
                    <FormInput :height="'3xl'" class="tw-ml-0.5 tw-w-full" placeholder="placeholder" id="form_input_7" type="text" autofocus autocomplete="off" />
                </label>
            </div>
        </div>

        <div class="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 2xl:tw-grid-cols-8 tw-font-medium">
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

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
            </div>

            <div class="tw-flex tw-items-start tw-justify-start tw-block tw-border tw-border-neutral-200">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "prototype",

    auth: 'guest',

    mounted(){
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

    data(){
        return{
            dateTime: this.$moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')
        }
    },

    methods:{
    },

    watch:{
    }
}
</script>


