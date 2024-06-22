import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
      },
      colors: {
        primary: '#FA3E05',
        secondary: '#FAB758',
        secondaryDark: '#FFA600',
        tertiary: '#BFA084',
        dark: '#01010C',
      },
    },
  },
  plugins: [],
}
export default config
