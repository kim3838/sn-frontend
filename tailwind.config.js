/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [],

    purge: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],

    darkMode: false, // or 'media' or 'class'

    mode: 'jit',

    prefix: 'tw-',

    important: true,

    theme: {
        extend: {
            fontFamily : {
                sans : ['Sofia Sans Semi Condensed', 'Roboto', 'Spline Sans', 'Inter', 'sans-serif'],
                serif : ['Almendra', 'Oranienbaum', 'Instrument Serif', 'Gupter', 'Kotta One', 'serif'],
                mono : ['Spline Sans Mono', 'Roboto Mono', 'monospace'],
            },
            spacing: {
                'sidebar': '250px',
                '2px' : '2px',
                '12px' : '12px',
                '1rem' : '1rem',
                '1.3rem' : '1.3rem'
            }
        },
    },

    variants: {
        extend: {},
    },

    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
}

