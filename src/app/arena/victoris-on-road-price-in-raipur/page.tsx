import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki VICTORIS On-Road Price Raipur | Features & Offers",
  description:
    "Discover the Maruti Suzuki VICTORIS in Raipur with on-road prices, features, and exclusive offers. Book a test drive today at Sky Automobiles Maruti Suzuki Raipur.",
};
const Victoris: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={0} />
    </div>
  );
};

export default Victoris;
