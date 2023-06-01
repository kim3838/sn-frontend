<template>
    <div>
        <div class="tw-font-mono tw-text-sm tw-text-gray-500">
            <span>User parameter : {{ parameterId }}</span>
        </div>
        <div class="tw-font-mono tw-text-sm tw-text-gray-500">
            <pre>{{user}}</pre>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'admin',

    name: "id",

    mounted() {
        this.get();
    },

    data() {
        return {
            parameterId: this.$route.params.id,
            user : {
                id: null,
                email: null
            }
        }
    },

    methods: {
        async get() {
            let that = this;

            that.$axios.$get('api/v1/users/' + that.parameterId, {
                params: {
                    filters: Object.assign({},{
                        location_id: 1001,
                        date: '2022-07'
                    })
                }
            }).then(function(response){
                that.user = Object.assign(that.user, response.values.user);
            }).catch(function(error){
                console.log(error.response);
            });
        }
    },

    watch: {}
}
</script>

<style scoped>

</style>
