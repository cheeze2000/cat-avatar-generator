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
            },
        },
    },
    plugins: [],
};
