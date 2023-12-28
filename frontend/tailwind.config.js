/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            lilac: '#bc8ac2',
         },
         width: {
            '80%': '90%',
         },
         spacing: {
            '45%': '45%',
         },
      },
   },
   plugins: [],
}
