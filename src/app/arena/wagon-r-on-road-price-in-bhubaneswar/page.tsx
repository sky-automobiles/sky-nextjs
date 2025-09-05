import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki WagonR On-Road Price Bhubaneswar | Spacious Hatchback",
  description:
    "Explore the spacious Maruti Suzuki WagonR in Bhubaneswar. Get on-road prices, features, and exciting offers at Sky Automobiles Maruti Suzuki Bhubaneswar.",
};
const WagonR: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={6} />
    </div>
  );
};

export default WagonR;
