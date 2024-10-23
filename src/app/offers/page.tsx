// pages/offers.tsx
import { Metadata } from "next";
import Offers from "./Offers";

// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Maruti Suzuki Offers Bhubaneswar, Raipur | Festive Discounts & Deals,Sky automobile Motors, Maruti Suzuki, Monsoon offers, Special Offers, September month offers",
  description:
    "Check out the latest offers on Maruti Suzuki cars at Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur. Avail of special discounts, festive offers, and exciting deals on your favorite Maruti Suzuki models.",
};

// Default export for the Offers page, can be a server component
export default function OffersPage() {
  return <Offers />;
}
