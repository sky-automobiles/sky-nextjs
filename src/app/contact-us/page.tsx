import { Metadata } from "next";
import ContactUs from "./ContactUs";

// Server-side metadata export
export const metadata: Metadata = {
  title:
    "Contact Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur | Get in Touch",
  description:
    "Need assistance? Contact Sky Automobiles Maruti Suzuki Bhubaneswar, Raipur. We are here for inquiries, test drive bookings, service appointments, and more. We are here to assist you with all your Maruti Suzuki needs.",
};

export default function ContactUsPage() {
  return <ContactUs />;
}
