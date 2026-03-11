const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            xs: "350px",
            ...defaultTheme.screens,
        },
        extend: {
            rotate: {
                270: "270deg",
            },
            maxHeight: {
                "80%": "90%",
                "90%": "90%",
            },
            colors: {
                yellow: {
                    "100-transparent": "#FEEDCE20",
                    "500-transparent": "#FEEDCE",
                    "700-transparent": "#C48D33",
                },
                blue: {
                    "100-transparent": "#ACF1FF20",
                    "300-transparent": "#ACF1FF50",
                    "500-transparent": "#ACF1FF",
                    "700-transparent": "#2C9BB5",
                },
                purple: {
                    "100-transparent": "#D5D4FF20",
                    "500-transparent": "#D5D4FF",
                    "700-transparent": "#605EB1",
                },
                orange: {
                    500: "#FE8A36",
                    "100-transparent": "#FE8A3610",
                },
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                worksans: ["Work Sans", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                playfair: ["Playfair Display", "sans-serif"],
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("child-p", "& p");
            addVariant("child-u", "& u");
        }),
        plugin(({ addUtilities }) => {
            addUtilities({
                ".content": { content: "attr(data-content)" },
                ".content-before": { content: "attr(data-before)" },
                ".content-after": { content: "attr(data-after)" },
            });
        }),
    ],
};
