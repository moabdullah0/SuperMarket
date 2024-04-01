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
        'custom-color': '#F2E5D9', 
      }
    },
  },
  plugins: [("tw-elements-react/dist/plugin.cjs")],
};
