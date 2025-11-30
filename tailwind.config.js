// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "bg-deep": "#020617",
//         "card-dark": "#020617",
//         "card-elevated": "#020617",
//         "accent-sky": "#38bdf8",
//         "accent-emerald": "#22c55e",
//       },
//       borderRadius: {
//         "3xl": "1.5rem",
//       },
//       boxShadow: {
//         "soft-xl": "0 24px 60px rgba(15,23,42,0.9)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};