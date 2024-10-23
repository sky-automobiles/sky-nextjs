import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki WagonR On-Road Price Raipur | Spacious Hatchback",
  description:
    "Explore the spacious Maruti Suzuki WagonR in Raipur. Get on-road prices, features, and exciting offers at Sky Automobiles Maruti Suzuki Raipur.",
};
const WagonR: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={5} />
    </div>
  );
};

export default WagonR;
