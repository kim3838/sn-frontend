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
                    <FormInputLabel for="email" value="Email" />
                    <FormInput id="email" type="email" class="tw-mt-1 tw-text-sm tw-block tw-w-full" v-model="form.email" autofocus autocomplete="off" />
                </div>

                <div class="tw-block tw-mt-4">
                    <FormInputLabel for="password" value="Password" />
                    <FormInput id="password" type="password" class="tw-mt-1 tw-text-sm tw-block tw-w-full" v-model="form.password" required autocomplete="current-password" />
                </div>

                <div class="tw-block tw-mt-4">
                    <label class="tw-flex tw-items-center">
                        <Checkbox name="remember" v-model="form.remember" />
                        <span class="tw-ml-2 tw-text-xs tw-text-gray-600">Remember me</span>
                    </label>
                </div>

                <div v-if="error" class="tw-block tw-mt-4 tw-text-sm tw-text-red-600">
                    <span>{{ error.data.message }}</span>
                </div>

                <div class="tw-flex tw-items-center tw-justify-end tw-mt-4">
                    <Button :height="'md'">Authenticate</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",

    auth: 'guest',

    mounted(){

    },

    data() {
        return {
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
