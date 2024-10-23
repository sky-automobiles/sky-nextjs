import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Brezza On-Road Price Bhubaneswar | Compact SUV",
  description:
    "Explore the Maruti Suzuki Brezza compact SUV in Bhubaneswar. Check out its on-road prices, features, and book a test drive at Sky Automobiles Maruti Suzuki Bhubaneswar",
};
const Brezza: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={2} />
    </div>
  );
};

export default Brezza;
