/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary color - Orange from logo
        primary: {
          DEFAULT: '#f6861f',
          50: '#fef6ee',
          100: '#fde9d7',
          200: '#fad0ae',
          300: '#f7b07a',
          400: '#f48644',
          500: '#f6861f',
          600: '#e76815',
          700: '#c04f14',
          800: '#984018',
          900: '#7a3617',
        },
        // Secondary color - Yellow from logo
        secondary: {
          DEFAULT: '#edeb6d',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#edeb6d',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Accent color - Brown from logo
        accent: {
          DEFAULT: '#6f6549',
          50: '#f6f5f0',
          100: '#e9e6d9',
          200: '#d4cdb5',
          300: '#bbb089',
          400: '#a39567',
          500: '#8d7d58',
          600: '#6f6549',
          700: '#5a4f3d',
          800: '#4c4335',
          900: '#433b30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
