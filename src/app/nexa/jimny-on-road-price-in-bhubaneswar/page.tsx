import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Jimny Price Bhubaneswar | Off-Road Adventure SUV",
  description:
    "Unleash your adventurous spirit with the Maruti Suzuki Jimny in Bhubaneswar. Explore its rugged capabilities, off-road features, and book a test drive at Sky Automobiles Maruti Suzuki.",
};
const Jimny: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={10} />
    </div>
  );
};

export default Jimny;
