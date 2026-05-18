import type {Metadata} from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';

const garamond = EB_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'The World Cup Chronicle',
  description: 'Historical football records & prophecies for the year 2026.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={garamond.className}>
      <body className="bg-[#f0e9df] text-[#2c241b]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
