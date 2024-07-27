/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      height:{
        '30': '30vh',
        '50': '50vh',
        '60': '60vh',
      },
      colors:{
        'primary': '#0052F5',
        'secondary': '#1A3CC0',
        'third': '#3A73F4',
        'gray': '#F0F0F5',
        'btn-pri': "#70E1A7",
        'btn-sec': "#7A5DF2",
        'label': '#2253F0'
      },
      fontSize:{
        'sm': '0.7rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2.5rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

