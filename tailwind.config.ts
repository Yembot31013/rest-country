import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(auto-fit, minmax(260px, 1fr))',
        // Simple 17 column grid
        '17': 'repeat(auto-fit, minmax(100%, 1fr))',
      }
    },
  },
  plugins: [],
}
export default config
