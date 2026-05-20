import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AppWrapper } from '@/context';
import ModalSelectState from '@/components/others/ModalSelectState';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import Callbutton from '../components/home/CallButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur | Authorized Dealer',
  description:
    'Explore Maruti Suzuki cars, book test drives, and get best offers.',
  verification: {
    google: '2ecODzAucw6IZtOpCzDOjoEQq8ZLb0_L1zdQslYEUX4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        {/* ✅ Microsoft Clarity */}
        <Script id='clarity' strategy='afterInteractive'>
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wgnhl2esfz");`}
        </Script>

        {/* ✅ Google Ads / gtag */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=AW-17597052359'
          strategy='afterInteractive'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17597052359');`}
        </Script>
        {/* ✅ Facebook Pixel (FIXED) */}
        <Script id='facebook-pixel' strategy='afterInteractive'>
          {`!function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1508432989868278');
            fbq('track', 'PageView');`}
        </Script>
        <GoogleTagManager gtmId='GTM-N3C9GWZJ' />

        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-N3C9GWZJ'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <AppWrapper>
          {children}
          <ModalSelectState />
          <Callbutton />
        </AppWrapper>

        <Toaster />

        {/* ✅ Google Analytics */}
        <GoogleAnalytics gaId='G-NMN4BGDYFF' />
      </body>
    </html>
  );
}
