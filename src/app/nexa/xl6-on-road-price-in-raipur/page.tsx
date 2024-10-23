import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA XL6 On-Road Price Raipur | Premium 6-Seater MPV",
  description:
    "Explore the premium NEXA XL6 MPV in Raipur. Find on-road prices, features, and attractive offers at NEXA Sky Automobiles Maruti Suzuki Raipur.",
};
const XL6: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={13} />
    </div>
  );
};

export default XL6;
