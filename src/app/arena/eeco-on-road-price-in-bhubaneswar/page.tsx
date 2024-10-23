import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Eeco On-Road Price Bhubaneswar | Stylish Sedan",
  description:
    "Discover the stylish Maruti Suzuki Eeco sedan in Bhubaneswar. Find on-road prices, key features, and exclusive offers on Eeco at Sky Automobiles Maruti Suzuki.",
};
const Ecco: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={8} />
    </div>
  );
};

export default Ecco;
