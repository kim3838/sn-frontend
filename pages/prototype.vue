<template>
    <div>
        <Button :height="'xs'">Authenticate</Button>
        <Button :height="'sm'">Authenticate</Button>
        <Button :height="'md'">Authenticate</Button>
        <Button :height="'lg'">Authenticate</Button>
        <hr>
        <br>
        <label class="tw-flex tw-items-center">
            <Checkbox name="remember" />
            <span class="tw-ml-2 tw-text-xs tw-text-gray-600">Remember me</span>
        </label>
        <hr>
        <br>
        <CardSample></CardSample>
    </div>
</template>

<script>
export default {
    name: "prototype",

    auth: 'guest',

    mounted(){
    },

    data(){
        return{
        }
    },

    methods:{
    },

    watch:{
    }
}
</script>


