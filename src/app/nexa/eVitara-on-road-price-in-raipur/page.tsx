import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki e-Vitara On-Road Price Raipur | Electric SUV",
  description:
    "Discover the all-electric Maruti Suzuki e-Vitara in Raipur. Explore its on-road price, features, and exclusive offers at NEXA Sky Automobiles Maruti Suzuki Raipur.",
};
const eVitara: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={10} />
    </div>
  );
};

export default eVitara;
