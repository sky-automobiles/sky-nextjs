import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Dzire On-Road Price Raipur | Stylish Sedan",
  description:
    "Discover the stylish Maruti Suzuki Dzire sedan in Raipur. Find on-road prices, key features, and exclusive offers on Dzire at Sky Automobiles Maruti Suzuki.",
};
const Dzire: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={3} />
    </div>
  );
};

export default Dzire;
