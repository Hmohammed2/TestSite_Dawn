/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./blocks/**/*.liquid",
  ],
  theme: { extend: {} },
  plugins: [],
};
