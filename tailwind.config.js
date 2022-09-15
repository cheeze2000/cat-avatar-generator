/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "components/**/*.js",
        "pages/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                "pcblue": "#a5c2e1",
                "pcorange": "#dd3e00",
            },
            fontFamily: {
                "inconsolata": ["Inconsolata", "monospace"],
                "nunito": ["Nunito", "sans-serif"],
                "source": ["Source Sans Pro", "sans-serif"],
            },
        },
    },
    plugins: [],
};
