import localFont from 'next/font/local';

// Create the font instance
export const AoriMono = localFont({
  src: [
    {
      path: '../../../dist/fonts/static/AoriMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aori-mono',
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

// Export as default for easy importing
export default AoriMono;
