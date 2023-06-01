<template>
    <div>
        <div class="tw-font-mono tw-text-sm tw-text-gray-500">
            <pre>{{this.$auth.user}}</pre>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'admin',

    name: "index",

    mounted(){
        this.testRequest();
    },

    data: () => ({
        node: 'User Index'
    }),

    methods:{
        async testRequest() {
            let response = await this.$axios.$get('api/v1/request', {
                params: {
                    filters: Object.assign({},{
                        location_id: 1001,
                        date: '2022-07'
                    })
                }
            });

            console.log(response);
        }
    },

    watch:{
    }
}
</script>

<style scoped>

</style>
