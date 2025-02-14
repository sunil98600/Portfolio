/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('C:\Users\sunil\Desktop\REACT\portfolio\portfolio\src\assets\img.jpg')",
        'space-image' : "url('C:\Users\sunil\Desktop\REACT\portfolio\portfolio\portfolio\src\assets\space.jpg')"
      }
    },
  },
  plugins: [],
}

