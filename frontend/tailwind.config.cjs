/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [{
      classic: {
        primary: "#000000",
        secondary: "#cdcbc6",
        accent: "#79400c",
        neutral: "#241C26",
        gold: "#FFD700",
        // "base-100": "#2A303C",
        "--rounded-box": "0.15rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.15rem", // border radius rounded-btn utility class, used in buttons and similar element

        '.tooltip::before': {
          'background-color': "#000000"
        }

       }
    }]
  }

}
