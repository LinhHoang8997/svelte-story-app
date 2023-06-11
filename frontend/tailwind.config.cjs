/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "1px 2px 4px var(--tw-shadow-color)",
        lg: "4px 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        classic: {
          primary: "#000000",
          secondary: "#eae9e6",
          accent: "#79400c",
          neutral: "#241C26",
          gold: "#FFD700",
          // "base-100": "#2A303C",
          "--rounded-box": "0.15rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.15rem", // border radius rounded-btn utility class, used in buttons and similar element

          ".tooltip::before": {
            "background-color": "#000000",
          },

          ".btn": {
            "height": "2rem",
            "min-height": "2rem",
          },

          //  Other custom styles for elements in this theme


        },
      },
    ],
  },
};
