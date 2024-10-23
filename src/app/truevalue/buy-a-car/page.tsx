import { Metadata } from "next";
import BuyACar from "./BuyACar";

// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Buy Used Maruti Suzuki Cars in Bhubaneswar, Raipur | Maruti True Value",
  description:
    "Buy certified pre-owned Maruti Suzuki cars with Sky Automobiles Maruti Suzuki True Value Bhubaneswar, Raipur. Explore our wide range of inspected and certified second-hand cars, offering reliability and affordability.",
};

export default function BookAServicePage() {
  return <BuyACar />;
}
