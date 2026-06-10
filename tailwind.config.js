/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        cream: '#F8F2E6',
        ivory: '#FFFDF8',
        emerald: { DEFAULT: '#0B5D3B', deep: '#0A4A30', soft: '#1F7A52' },
        gold: { DEFAULT: '#B8923D', soft: '#D4B872', deep: '#8A6A23' },
        crimson: { DEFAULT: '#8E2A2A', soft: '#B5413F' },
        warmbrown: { DEFAULT: '#5C3A1E', deep: '#3A2418', soft: '#8B6B4A' },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #FFFDF8 0%, #F8F2E6 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #0B5D3B 0%, #0A4A30 100%)',
      },
      boxShadow: {
        'luxe': '0 30px 60px -15px rgba(58, 36, 24, 0.18), 0 8px 20px -6px rgba(58, 36, 24, 0.08)',
        'soft': '0 8px 24px -8px rgba(58, 36, 24, 0.12)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'shimmer': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'float-slow': { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
