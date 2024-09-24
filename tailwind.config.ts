import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        slider: '500 / 300'
      },
      boxShadow: {
        'c-xs': '5px 5px 15px 0px rgba(24, 24, 24, 0.05)',
        c: '14px 14px 36px 0px rgba(85, 85, 85, 0.1)',
        'c-lg': '14px 14px 36px 0px rgba(85, 85, 85, 0.22)'
      },
      // backgroundImage: {
      //   'hero-pattern': "url('../../images/banner_bg.png')",
      //   'hero-img': "url('../../images/hero-img.png')"
      // },
      fontFamily: {
        lato: ['var(--font-lato)']
      },
      fontSize: {
        display1: [
          '96px',
          {
            lineHeight: '128px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        display2: [
          '72px',
          {
            lineHeight: '96px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading1: [
          '48px',
          {
            lineHeight: '64px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading2: [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading3: [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading4: [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading5: [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading6: [
          '16px',
          {
            lineHeight: '20px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        'heading-sm': [
          '14px',
          {
            lineHeight: '16px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        large: [
          '18px',
          {
            lineHeight: '26px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ],
        medium: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ],
        small: [
          '14px',
          {
            lineHeight: '21px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ],
        xsmall: [
          '12px',
          {
            lineHeight: '18px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ]
      },
      colors: {
        transparent: 'rgba(1,1,1,0)',
        red: '#ef4f4f',
        white: '#FFFFFF',
        gray: {
          100: '#F4F6FA',
          200: '#E5E5E5',
          300: '#CACACA',
          400: '#B6B6B6',
          500: '#7e7e7e'
        },
        yellow: {
          100: '#F6C065',
          200: '#FDC040'
        },
        blue: {
          100: '#46BCF2',
          200: '#008891',
          300: '#253D4E'
        },
        green: {
          100: '#F2FCE4',
          150: '#BCE3C9',
          200: '#3BB77E',
          300: '#81B13D',
          400: '#3A882B',
          500: '#227226',
          600: '#1A5D2C'
        },
        brown: {
          500: '#F0E8D5'
        }
      }
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1632px'
      }
    }
  },
  plugins: [],
};
export default config;
