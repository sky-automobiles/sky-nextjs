import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Baleno On-Road Price Bhubaneswar | Premium Hatchback",
  description:
    "Discover the premium Maruti Suzuki Baleno in Bhubaneswar. Get on-road prices, key features, and book a test drive at NEXA Sky Automobiles Maruti Suzuki Bhubaneswar.",
};
const Baleno: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={16} />
    </div>
  );
};

export default Baleno;
