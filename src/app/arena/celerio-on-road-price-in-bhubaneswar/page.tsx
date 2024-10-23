import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Maruti Suzuki Celerio On-Road Price Bhubaneswar | Hatchback with Best Mileage",
  description:
    "Check out the Maruti Suzuki Celerio with best-in-class mileage in Bhubaneswar. Find on-road prices, features, and test drive this efficient hatchback.",
};
const Celerio: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={7} />
    </div>
  );
};

export default Celerio;
