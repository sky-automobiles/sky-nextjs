import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppWrapper } from "@/context";
import ModalSelectState from "@/components/others/ModalSelectState";
import ModalConf from "@/components/others/ModalConf";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Sky Automobiles Maruti Suzuki  Bhubaneswar , Raipur | Authorized Maruti Suzuki Dealer",
  description:
    "Welcome to Sky Automobiles Maruti Suzuki, Bhubaneswar’s, Raipur’s trusted Maruti Suzuki dealer. Explore the latest models, book a test drive, and avail exclusive offers on Maruti Suzuki cars. Visit us for unparalleled sales and after-sales services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager (Head) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[]; 
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'}); 
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
                j.async=true; 
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MWWMDX99');
            `,
          }}
        ></script>

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1508432989868278');
                fbq('track', 'PageView');
            `,
          }}
        ></script>
      </Head>

      <body className={inter.className}>
        {/* Google Tag Manager (Body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWWMDX99"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <AppWrapper>
          {children}
          <ModalSelectState />
          <ModalConf />
        </AppWrapper>
        <Toaster />
      </body>

      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-NMN4BGDYFF" />
    </html>
  );
}
