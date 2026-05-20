import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AppWrapper } from '@/context';
import ModalSelectState from '@/components/others/ModalSelectState';
import { GoogleTagManager } from '@next/third-parties/google';
import Callbutton from '../components/home/CallButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur | Authorized Dealer',
  description:
    'Explore Maruti Suzuki cars, book test drives, and get best offers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleTagManager gtmId='GTM-5L2MX9GG' />
        <AppWrapper>
          {children}
          <ModalSelectState />
          <Callbutton />
        </AppWrapper>
        <Toaster />
      </body>
    </html>
  );
}
