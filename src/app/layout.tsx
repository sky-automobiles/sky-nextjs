import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppWrapper } from "@/context";
import ModalSelectState from "@/components/others/ModalSelectState";
import ModalConf from "@/components/others/ModalConf";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-N3C9GWZJ" />
      <body className={inter.className}>
        <AppWrapper>
          {children}
          <ModalSelectState />
          <ModalConf />
        </AppWrapper>
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-NMN4BGDYFF" />
    </html>
  );
}
