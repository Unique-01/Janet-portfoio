/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                sm: "2rem",
                lg: "4rem",
                xl: "4rem",
                //   '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                primary: "#FD853A",
                secondary: "#F2F4F7"
            },
        },
    },
    plugins: [],
};
