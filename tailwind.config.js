/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors : {
        primary : "#1182c5",
        secondary : "#2aa6df",
        lightblue : "#addfff",
        offwhite : "#F7E7CE",
        instagram : "#C13584",
        facebook : "#316FF6",
        whatsapp : "#075E54",
        heart : "#ff0080"
      },

    },
    screens : {

      'dxs' : '300px',
      // => @media (min-width: 300px) { ... }

      'xxs' : '400px',
      // => @media (min-width: 400px) { ... }

      'xsm' : '458px',
      // => @media (min-width: 400px) { ... }

      'xs' : '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'just': '641px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'smd' : '800px',
         // => @media (min-width: 860px) { ... }

      'mmd': '860px',
        // => @media (min-width: 860px) { ... }

      'xmd' : '930px',
        // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


       'xlg' : '1110px',
           // => @media (min-width: 1110px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      
    },
  },
  plugins: [],
}
