// // module.exports ={
//   theme: {
//     extend: {
//       colors: {
//         primary_pink: 'hsl(322, 100%, 66%)',
//         sec_light_pink: 'hsl(321, 100%, 78%)',
//         light_red: 'hsl(0, 100%, 63%)',
//         dark_cyan: 'hsl(192, 100%, 9%)',
//         pale_blue: 'hsl(207, 100%, 98%)',
//       },
//     },
//   },
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"], // Adjust these paths based on your project structure
  theme: {
    extend: {
      colors: {
        primary_pink: 'hsl(322, 100%, 66%)',
        sec_light_pink: 'hsl(321, 100%, 78%)',
        light_red: 'hsl(0, 100%, 63%)',
        dark_cyan: 'hsl(192, 100%, 9%)',
        pale_blue: 'hsl(207, 100%, 98%)',
      },
    },
  },
  plugins: [],
}