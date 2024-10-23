import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Suzuki Invicto Price Raipur | Luxury MPV",
  description:
    "Discover the all-new Maruti Suzuki Invicto in Raipur. A premium MPV that combines luxury, performance, and comfort. Explore its features, on-road price, and book a test drive at Sky Automobiles Maruti Suzuki.",
};
const Invicto: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={9} />
    </div>
  );
};

export default Invicto;
