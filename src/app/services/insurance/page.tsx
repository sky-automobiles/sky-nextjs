// pages/offers.tsx
import { Metadata } from "next";
import Insurance from "./Insurance";

// Server-side metadata export
export const metadata: Metadata = {
  title: "Maruti Suzuki Car Insurance Bhubaneswar, Raipur | Hassle-Free Claims",
  description:
    "Protect your Maruti Suzuki car with comprehensive insurance from Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur. Get quick claims, cashless repairs, and extensive coverage for peace of mind on the road.",
};

export default function InsurancePage() {
  return <Insurance />;
}
