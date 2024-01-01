/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lilac: "#bc8ac2",
                "lilac-hover": "#b975c1",
            },
            width: {
                "90%": "90%",
            },
            height: {
                "10%": "10%",
                "95%": "9%",
            },
            spacing: {
                "45%": "45%",
            },
        },
    },
    plugins: [],
};
