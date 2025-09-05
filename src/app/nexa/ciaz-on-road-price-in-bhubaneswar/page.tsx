import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Ciaz On-Road Price Bhubaneswar | Luxury Sedan",
  description:
    "Check out the luxurious NEXA Ciaz sedan in Bhubaneswar. Discover its on-road price, premium features, and exclusive offers at NEXA Sky Automobiles Maruti Suzuki Bhubaneswar.",
};
const Ciaz: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={16} />
    </div>
  );
};

export default Ciaz;
