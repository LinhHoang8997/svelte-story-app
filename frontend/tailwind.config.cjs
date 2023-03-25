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
        secondary: "#302f2c",
        accent: "#f9f9f9",
        "--rounded-box": "0.15rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.15rem", // border radius rounded-btn utility class, used in buttons and similar element

        '.tooltip::before': {
          'background-color': "#000000"
        }

       }
    }]
  }

}
