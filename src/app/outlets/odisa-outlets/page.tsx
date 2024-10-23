import React from "react";
import { Metadata } from "next";
import OdishaOutlets from "./OdishaOutlets";

// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Sky Automobiles Maruti Suzuki Showrooms & Service Centers Bhubaneswar",
  description:
    "Locate Sky Automobiles Maruti Suzuki showrooms and service centers in Bhubaneswar. Visit us for the latest Maruti Suzuki cars, test drives, and exceptional customer service.",
};

const ODOutlets = () => {
  return <OdishaOutlets />;
};

export default ODOutlets;
