const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        colors: {
            black : colors.black,
            gray  : colors.gray,
            indigo: colors.indigo,
            white : colors.white,
        },
        fontFamily: {
            header: "Livvic, sans-serif",
            sans  : "'Source Sans Pro', sans-serif",
            mono  : "'Source Code Pro', monospace"
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
        }
    },
    variants: { },
    plugins : [ ]
}
