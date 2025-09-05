import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Spresso On-Road Price Bhubaneswar | 7-Seater MPV",
  description:
    "Find the spacious Maruti Suzuki Spresso MPV in Bhubaneswar. Discover its on-road price, features, and special offers for family trips and more.",
};
const Spresso: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={5} />
    </div>
  );
};

export default Spresso;
