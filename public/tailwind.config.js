module.exports = {
    purge: ['./**/*.html'],
    mode: 'jit',
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: {
                dots: 'radial-gradient(#ddd 1px, transparent 0), radial-gradient(#ddd 1px, transparent 0)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
