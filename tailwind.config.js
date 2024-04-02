/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color": "#F2E5D9",
      },
      backgroundImage: {
        "greengrocer-shelf":
          "url('https://img.freepik.com/premium-photo/refrigerated-shelf-greengrocer-ia-generative_545448-16267.jpg?w=1060')",
      },
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
        tajawal: ["STKaiti"],
      },
    },
  },
  plugins: ["tw-elements-react/dist/plugin.cjs"],
};
