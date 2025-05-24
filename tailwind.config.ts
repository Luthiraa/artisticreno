import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {    extend: {      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-gold': '#FFD700',
        'primary-black': '#1A1A1A',
        'dark-bg': 'var(--dark-bg)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-card': 'var(--dark-card)',
        'dark-text': 'var(--dark-text)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
