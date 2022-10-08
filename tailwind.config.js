/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*"],
  theme: {
    extend: {
      colors: {
        "bg-white": "#fbffe3",
        "light-green": "#83a300",
        ggreendark: "#3CA55C",
        ggreenlight: "#B5AC49",
        pinkist: "#e21b5a",
      },
    },
  },
  plugins: [],
};
