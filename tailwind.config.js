/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {

    content: [
        "./components/Jetstream/**/*.{js,vue,ts}",
        "./components/Logo/**/*.{js,vue,ts}",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],

    prefix: 'tw-',

    important: true,

    theme: {
        extend: {
            fontFamily : {
                sans : ['Source Sans Pro', 'Sofia Sans Semi Condensed', 'Spline Sans', 'Roboto', 'Roboto Condensed', 'Inter', 'sans-serif'],
                serif : ['Almendra', 'Oranienbaum', 'Instrument Serif', 'Gupter', 'Kotta One', 'serif'],
                mono : ['Spline Sans Mono', 'Roboto Mono', 'monospace'],
            },
            spacing: {
                'sidebar': '250px',
                '2px' : '2px',
                '5px' : '5px',
                '12px' : '12px',
                '1rem' : '1rem',
                '1.3rem' : '1.3rem'
            },
            colors: {
                'lighter': '#b4b4b4',
                'light': '#969696',
                'dark': '#787878',
                'darker': '#323232',
                'accent': '#646464',
                // 'lighter': '#F8ECD1',
                // 'light': '#DEB6AB',
                // 'dark': '#AC7D88',
                // 'darker': '#85586F',
                // 'accent': '#80506b',
            }
        }
    },

    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
}

