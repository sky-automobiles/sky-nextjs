import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Grand Vitara On-Road Price Raipur | Premium SUV",
  description:
    "Explore the premium NEXA Grand Vitara SUV in Raipur. Get on-road prices, advanced features, and exciting offers at NEXA Sky Automobiles Maruti Suzuki Raipur.",
};
const GrandVitara: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={14} />
    </div>
  );
};

export default GrandVitara;
