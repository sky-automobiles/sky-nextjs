import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Jimny Price Raipur | Off-Road Adventure SUV",
  description:
    "Unleash your adventurous spirit with the Maruti Suzuki Jimny in Raipur. Explore its rugged capabilities, off-road features, and book a test drive at Sky Automobiles Maruti Suzuki.",
};
const Jimny: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={11} />
    </div>
  );
};

export default Jimny;
