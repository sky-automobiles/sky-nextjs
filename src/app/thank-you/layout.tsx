import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Thank You for Contacting Sky Automobiles | Explore More Offers & Cars",
  description:
    "Thank you for reaching out to Sky Automobiles! Our team will respond shortly. In the meantime, explore our range of vehicles, current offers, and services designed to make your car buying journey seamless.",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
