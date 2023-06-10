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
                sans : ['Sofia Sans Semi Condensed', 'Spline Sans', 'Roboto', 'Inter', 'sans-serif'],
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
                'lighter': '#C9D8E5',
                'light': '#95B3CA',
                'dark': '#8AA5BD',
                'darker': '#507394',
            }
        }
    },

    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
}

