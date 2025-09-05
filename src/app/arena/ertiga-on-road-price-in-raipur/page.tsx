import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Ertiga On-Road Price Raipur | 7-Seater MPV",
  description:
    "Find the spacious Maruti Suzuki Ertiga MPV in Raipur. Discover its on-road price, features, and special offers for family trips and more.",
};
const Ertiga: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={7} />
    </div>
  );
};

export default Ertiga;
