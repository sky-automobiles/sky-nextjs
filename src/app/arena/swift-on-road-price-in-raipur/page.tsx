import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Swift On-Road Price Raipur | Features & Offers",
  description:
    "Discover the Maruti Suzuki Swift in Raipur with on-road prices, features, and exclusive offers. Book a test drive today at Sky Automobiles Maruti Suzuki Raipur.",
};
const Swift: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={1} />
    </div>
  );
};

export default Swift;
