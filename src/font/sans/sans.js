import localFont from 'next/font/local';

// Create the font instance
export const AoriSans = localFont({
  src: [
    {
      path: '../../../dist/fonts/static/AoriSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../dist/fonts/static/AoriSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../dist/fonts/static/AoriSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../dist/fonts/static/AoriSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aori-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

// Export as default for easy importing
export default AoriSans;
