import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'verde': '#89AA28',
        'verde-normal': "#7AAC00",
        'marrom-escuro': '#2F281E',
        'marrom-claro': '#3B3322'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'center': '69.375rem'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  plugins: [require('@tailwindcss/line-clamp')],
  }
}

export default config
