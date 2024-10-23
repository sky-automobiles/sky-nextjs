import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Brezza On-Road Price Raipur | Compact SUV",
  description:
    "Explore the Maruti Suzuki Brezza compact SUV in Raipur. Check out its on-road prices, features, and book a test drive at Sky Automobiles Maruti Suzuki Raipur",
};
const Brezza: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={2} />
    </div>
  );
};

export default Brezza;
