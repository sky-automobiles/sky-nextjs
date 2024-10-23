import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Ignis On-Road Price Raipur | Urban Compact SUV",
  description:
    "Explore the compact SUV, NEXA Ignis in Raipur. Find out on-road prices, unique features, and exciting offers at NEXA Sky Automobiles Maruti Suzuki Raipur.",
};
const Ignis: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={16} />
    </div>
  );
};

export default Ignis;
