import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Maruti Suzuki Alto k10 On-Road Price Raipur | Affordable City Car",
  description:
    "Check out the Maruti Suzuki Alto k10 in Raipur with on-road prices, features, and attractive offers. Experience smooth city drives with Alto k10.",
};
const AltoK10: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={1} />
    </div>
  );
};

export default AltoK10;
