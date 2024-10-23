// pages/offers.tsx
import { Metadata } from "next";
import Finance from "./Finance";

// Server-side metadata export
export const metadata: Metadata = {
  title: "Maruti Suzuki Car Finance Bhubaneswar, Raipur | Easy Loan Options",
  description:
    "Sky Automobiles Maruti Suzuki Bhubaneswar offers flexible finance solutions for buying your Maruti Suzuki car. Enjoy easy EMIs, low-interest rates, and quick approvals with our trusted finance partners.",
};

export default function FinancePage() {
  return <Finance />;
}
