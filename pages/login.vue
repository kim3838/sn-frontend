<template>
    <div class="container">
        <div class="moody-card tw-p-6">
            <div class="moody-card-frame"></div>
            <div class="tw-relative">
                <TextSample></TextSample>
            </div>
        </div>

        <div v-if="true" class="tw-flex tw-h-full tw-items-center tw-border-gray-200 tw-border">
            <form @submit.prevent="login" class="tw-w-72 tw-border tw-border-gray-200">
                <div class="tw-block">
                    <FormInputLabel :height="'md'" for="email" value="Email" />
                    <FormInput :height="'md'" id="email" type="email" class="tw-w-full" v-model="form.email" autofocus autocomplete="off" />
                </div>

                <div class="tw-block tw-mt-4">
                    <FormInputLabel :height="'md'" for="password" value="Password" />
                    <FormInput :height="'md'" id="password" type="password" class="tw-w-full" v-model="form.password" required autocomplete="current-password" />
                </div>

                <div class="tw-block tw-mt-4">
                    <label class="tw-flex tw-items-center">
                        <Checkbox name="remember" v-model="form.remember" :height="'md'" :label="'Remember me'" />
                    </label>
                </div>

                <div v-if="error" class="tw-block tw-mt-4 tw-text-sm tw-text-red-600">
                    <span>{{ error.data.message }}</span>
                </div>

                <div class="tw-flex tw-items-center tw-justify-end tw-mt-4">
                    <Button :height="'md'"><span class="tw-font-semibold">Authenticate</span></Button>
                </div>
            </form>
        </div>
        <div>
            <p v-if="$fetchState.pending">Fetching mountains...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
                <h1>Nuxt Mountains</h1>
                <ul>
                    <li v-for="mountain of mountains">{{ mountain.title }}</li>
                </ul>
                <button @click="$fetch">Refresh</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",

    auth: 'guest',

    // mounted(){
    //
    //     console.log({'MOUNT BASE_URL' : this.$config.baseURL});
    //     console.log({'MOUNT VERSION' : this.$config.version});
    //     console.log({'MOUNT API_SECRET' : this.$config.apiSecret});
    // },

    async fetch() {
        console.log({'ASYNC BASE_URL' : this.$config.baseURL});
        console.log({'ASYNC VERSION' : this.$config.version});
        console.log({'ASYNC API_SECRET' : this.$config.apiSecret});

        this.mountains = await fetch(
            'https://api.nuxtjs.dev/mountains'+ '?secret=' + this.$config.apiSecret
        ).then(res => res.json())

        // this.mountains = await this.$axios.$get(
        //     'https://api.nuxtjs.dev/mountains'+ '?secret=' + this.$config.apiSecret
        // );
    },
    fetchOnServer: false,

    // async asyncData(context) {
    //     console.log({'ASYNC BASE_URL' : context.$config.baseURL});
    //     console.log({'ASYNC VERSION' : context.$config.version});
    //     console.log({'ASYNC API_SECRET' : context.$config.apiSecret});
    //
    //     const ip = await context.$axios.$get('http://icanhazip.com' + '?secret=' + context.$config.apiSecret)
    //     return { ip }
    // },

    // async asyncData({app, store, route, params, query, env, isDev, isHMR, redirect, error, $config, $axios}) {
    //     console.log({'ASYNC BASE_URL' : $config.baseURL});
    //     console.log({'ASYNC VERSION' : $config.version});
    //     console.log({'ASYNC API_SECRET' : $config.apiSecret});
    //     console.log({'ASYNC params' : params});
    //     const mountains = await $axios.$get('https://api.nuxtjs.dev/mountains?' + 'secret=' + $config.apiSecret)
    //     return { mountains }
    // },

    // async fetch(context) {
    //     this.mountains = await fetch(
    //         'https://api.nuxtjs.dev/mountains?' + 'secret=' + context.$config.apiSecret
    //     ).then(res => res.json())
    // },

    data() {
        return {
            mountains: [],
            form: {
                email: 'berenice.jerde@example.com',
                password: 'password',
                remember: false
            },

            error: null
        }
    },

    methods:{
        async login() {

            let that = this;

            this.error = null;

            try {
                await this.$auth.loginWith('cookie', {
                    data: {
                        ...this.form
                    }
                }).then(
                    () => console.log({"loggedIn" : this.$auth.loggedIn})
                );

                await that.$router.push('/');
            } catch (error) {
                this.error = error.response;
            }
        },
    },

    watch:{
    }
}
</script>

<style scoped>
.container {
    @apply tw-flex tw-justify-center tw-items-center tw-text-center tw-mx-auto;
    /*border: 1px solid silver;*/
}

.moody-card{
    border: 1px solid silver;
    position: relative;
    margin: 24px;
}

.moody-card-frame{
    box-sizing: border-box;
    display: block;
    content: none;
}

.moody-card-frame:before{
    position: absolute;
    content: "";
    top: -8px;
    left: -9px;
    right: 7px;
    bottom: 7px;
    border: 1px solid silver;
    display: block;
}

.moody-card-frame:after{
    position: absolute;
    content: "";
    top: 7px;
    left: 7px;
    right: -9px;
    bottom: -8px;
    border: 1px solid silver;
    display: block;
}
</style>
