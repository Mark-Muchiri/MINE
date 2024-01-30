/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require("daisyui") ],
  daisyui: {
    themes: [ "light", "dark", "night" ],
  },
});
