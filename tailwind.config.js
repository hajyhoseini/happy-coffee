/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         customWhite: 'rgba(240, 240, 255, 0.7)',
                background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    
      backgroundImage: {
        'custom-image': "url('/image/login.webp')",
        'custom-image-main': "url('/image/mainPage.webp')",
        'custom-image-myUser': "url('/image/userMy.webp')",
        'custom-header-img': "url('/image/headerBg.webp')",
      },
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'], // فونت سفارشی
      },  animation: {
        flash: 'flash 1s infinite',
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    
  },
  plugins: [],
}

