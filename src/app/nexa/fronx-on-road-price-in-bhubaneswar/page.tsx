import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NEXA Fronx On-Road Price Bhubaneswar | Futuristic Compact SUV",
  description:
    "Discover the futuristic design and features of the NEXA Fronx in Bhubaneswar. Check on-road prices and book your test drive at Sky Automobiles Maruti Suzuki Bhubaneswar.",
};
const Fronx: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={12} />
    </div>
  );
};

export default Fronx;
