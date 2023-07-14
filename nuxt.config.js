export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'sn-frontend',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            //Sans
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sofia+Sans+Semi+Condensed:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap'},
            //Sans-Serif
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gupter:wght@400;500;700&family=Kotta+One&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
            //Monospace
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'}
        ],
        script:[
            {src: 'js/common/moment.min.js'},
            {src: 'js/common/jquery.min.js'},
            {src: 'js/datetimepicker/index.js'}
        ],
        bodyAttrs: {
            class: 'tw-text-accent tw-font-sans tw-h-full tw-w-full'
        }
    },

    loading: '~/components/Loading.vue',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css',
        '@/assets/css/tailwind.css',
        '@/assets/css/fonts.css',
        '@/assets/css/datetimepicker.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios',
        '~/plugins/moment',
        '~/plugins/lodash'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            '~/components/Logo',
            '~/components/Jetstream',
            '~/components/Form'
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/vuetify', {
            theme: { disable: true }
        }]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    auth: {
        plugins: [ '~/plugins/auth.js' ],
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            home: '/'
        },
        strategies: {
            cookie: {
                // scheme: '~/schemes/customScheme',

                endpoints: {
                    // (optional) If set, we send a get request to this endpoint before login
                    csrf: {url: '/sanctum/csrf-cookie'},
                    login: { url: '/login', method: 'post' },
                    logout: { url: '/logout', method: 'post' },
                    user: {url: '/api/user'}
                },

                cookie: {
                    // (optional) If set, we check this cookie existence for loggedIn check
                    name: 'XSRF-TOKEN'
                },

                user: {
                    // field of the response JSON to be used for user value
                    property: 'values',
                    // auth will load the user's info using a second HTTP request after a successful login
                    autoFetch: true
                },

                token: {
                    required: false
                },

                clientId: false,

                grantType: false,

                scope: false
            }
        }
    },


    router: {
        middleware: [
            'auth'
        ]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://localhost:8000',// Base url fallback if no runtime config is provided
        credentials: true,
        https: false,
        headers: {
            common: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': ('Bearer ' + '0')
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    publicRuntimeConfig: {
        baseURL: process.env.BASE_URL || 'http://localhost:8000',
        version: process.env.VERSION,
        axios: {
            browserBaseURL: process.env.BROWSER_BASE_URL
        }
    },

    privateRuntimeConfig: {
        apiSecret: process.env.API_SECRET,
        axios: {
            baseURL: process.env.BASE_URL
        }
    }
}
