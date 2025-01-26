import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Ciaz On-Road Price Raipur | Luxury Sedan",
  description:
    "Check out the luxurious NEXA Ciaz sedan in Raipur. Discover its on-road price, premium features, and exclusive offers at NEXA Sky Automobiles Maruti Suzuki Raipur.",
};
const eVitara: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={9} />
    </div>
  );
};

export default eVitara;
