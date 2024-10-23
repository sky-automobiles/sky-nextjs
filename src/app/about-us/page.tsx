import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { Metadata } from "next";
import React from "react";
import AboutUs from "./AboutUs";

export const metadata: Metadata = {
  title:
    "About Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur | Trusted Maruti Suzuki Dealer",
  description:
    "Sky Automobiles Maruti Suzuki in Bhubaneswar offers unmatched services for Maruti Suzuki vehicles. Discover our journey, commitment to excellence, and why we are Bhubaneswar's & Raipur's preferred Maruti Suzuki dealer.",
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
