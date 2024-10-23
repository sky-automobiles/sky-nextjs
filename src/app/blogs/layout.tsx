// layout.tsx
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
     <Footer />
    </div>
  );
};

export default Layout;
