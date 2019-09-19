const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [ __dirname + '/layouts/**/*.html' ],

    whitelistPatternsChildren: [
        /chroma/,
        /content/,
        /content--body/,
        /footnote/
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [
                __dirname + '/assets/css/',
                __dirname + '/node_modules/'
            ]
        }),
        require('tailwindcss')(__dirname + '/tailwind.config.js'),
        require('autoprefixer'),

        ...process.env.HUGO_ENV === 'production' ? [purgecss] : []
    ]
}
