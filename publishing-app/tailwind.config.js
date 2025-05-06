// filepath: c:\Users\PC\Documents\Coding Projects\publishing-app\publishing-app\tailwind.config.js

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {}, // for costumizing the default theme
    },
    plugins: ['@tailwindcss/forms', '@tailwindcss/typography', '@tailwindcss/aspect-ratio'],
  };