import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Dzire On-Road Price Bhubaneswar | Stylish Sedan",
  description:
    "Discover the stylish Maruti Suzuki Dzire sedan in Bhubaneswar. Find on-road prices, key features, and exclusive offers on Dzire at Sky Automobiles Maruti Suzuki.",
};
const Dzire: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={4} />
    </div>
  );
};

export default Dzire;
