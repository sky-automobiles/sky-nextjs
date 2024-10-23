import React from "react";
import { Metadata } from "next";
import ChhattisgarhOutlets from "./ChhattisgarhOutlets";

// Server-side metadata export
export const metadata: Metadata = {
  title: "Sky Automobiles Maruti Suzuki Showrooms & Service Centers Raipur",
  description:
    "Locate Sky Automobiles Maruti Suzuki showrooms and service centers in Raipur. Visit us for the latest Maruti Suzuki cars, test drives, and exceptional customer service.",
};

const CGOutlets = () => {
  return <ChhattisgarhOutlets />;
};

export default CGOutlets;
