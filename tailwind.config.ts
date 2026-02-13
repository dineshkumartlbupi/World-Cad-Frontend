import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1051b3',
        'primary-dark': '#0b3d8a',
        secondary: '#F4F6F8',
        accent: '#00B8D9',
        'text-main': '#172B4D',
        'text-muted': '#5E6C84',
        'text-light': '#7A869A',
        'bg-main': '#FFFFFF',
        'bg-secondary': '#F4F6F8',
        border: '#DFE1E6',
        'border-light': '#EBECF0',
      },
      fontFamily: {
        inter: ["'Inter'", 'system-ui', 'sans-serif'],
        outfit: ["'Outfit'", 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(9, 30, 66, 0.08)',
        md: '0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 2px 4px -2px rgba(9, 30, 66, 0.08)',
        lg: '0 16px 24px -2px rgba(9, 30, 66, 0.25), 0 8px 12px -4px rgba(9, 30, 66, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
