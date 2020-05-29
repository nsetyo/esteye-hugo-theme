const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === 'production',
        content: ['./layouts/**/*.html'],
        options: {
            whitelist: [
                /tt code kbd samp/,
                /chroma/,
                /content/,
                /content-body/,
                /footnote/,
                /highlight/
            ],
        }
    },
    theme: {
        colors: {
            black: colors.black,
            gray: colors.gray,
            indigo: colors.indigo,
            transparent: colors.transparent,
            white: colors.white,
        },
        container: {
            center: true,
            padding: '1.5rem'
        },
        fontFamily: {
            sans: "'Source Sans Pro', sans-serif",
            mono: "'Source Code Pro', monospace"
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
        }
    },
}
