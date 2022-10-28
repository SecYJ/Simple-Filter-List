/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#00807E",
                accent: "#64C3BF",
                "dark-grey": "#818A91",
                "light-grey": "#DEE2E6",
            },
        },
    },
    plugins: [],
};
