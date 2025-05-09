// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // Adjust paths to match your project structure
    ],
    theme: {
        extend: {
            screens: {
                sm: '600px', // Adjust the 'sm' breakpoint
                md: '800px', // Adjust the 'md' breakpoint
                lg: '1024px', // Adjust the 'lg' breakpoint
                xl: '1280px', // Adjust the 'xl' breakpoint
                '2xl': '1536px', // Adjust the '2xl' breakpoint
            },
        },
    },
    plugins: [],
};