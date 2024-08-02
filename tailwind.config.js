/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:"#156BCA",
      heading:"#152A16",
      white:"#FFFFFF"
    },
    fontFamily:{
        poppines:'Poppins, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

