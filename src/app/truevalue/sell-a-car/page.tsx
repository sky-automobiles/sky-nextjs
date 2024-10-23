import { Metadata } from "next";
import SellCar from "./SellCar";

// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Sell Your Used Maruti Suzuki Car in Bhubaneswar, Raipur | Maruti True Value",
  description:
    "Sell your used Maruti Suzuki car with ease at Sky Automobiles Maruti Suzuki True Value Bhubaneswar, Raipur. Get the best price for your car with a transparent evaluation process and hassle-free documentation.",
};

export default function BookAServicePage() {
  return <SellCar />;
}
