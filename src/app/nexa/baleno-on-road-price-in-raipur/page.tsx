import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Baleno On-Road Price Raipur | Premium Hatchback",
  description:
    "Discover the premium Maruti Suzuki Baleno in Raipur. Get on-road prices, key features, and book a test drive at NEXA Sky Automobiles Maruti Suzuki Raipur.",
};
const Baleno: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={15} />
    </div>
  );
};

export default Baleno;
