import React from "react";

const reasons = [
  {
    title: "1. Exceptional Fuel Efficiency",
    content: `The Alto K10 is renowned for its impressive fuel economy, boasting a certified mileage of up to 24.9 km/l for petrol variants. This makes it one of the most fuel-efficient cars in its class, ideal for those looking to minimize their fuel expenses. The efficient 1.0-liter dual-jet engine ensures that you can navigate city traffic without frequent stops at the pump, making it a practical choice for daily commuting.`,
  },
  {
    title: "2. Peppy Performance and Driveability",
    content: `With a power output of 66 bhp and 89 Nm of torque, the Alto K10 offers a lively driving experience, especially in urban settings. Its lightweight design (kerb weight ranging from 716 to 741 kg) contributes to a healthy power-to-weight ratio, allowing for quick acceleration and easy maneuverability. The optional AGS (Auto Gear Shift) provides a semi-automatic driving experience, making it user-friendly for those new to driving.`,
  },
  {
    title: "3. Spacious and Comfortable Interior",
    content: `Despite its compact size, the Alto K10 features a surprisingly spacious cabin that comfortably accommodates four adults. The redesigned interior offers ample headroom and legroom, making it suitable for taller passengers as well. Additionally, the boot space has increased from 117 liters in previous models to 214 liters, providing enough room for luggage or groceries—perfect for small families or individuals with active lifestyles.`,
  },
  {
    title: "4. Strong After-Sales Support and Resale Value",
    content: `Maruti Suzuki has established a robust after-sales service network across India, ensuring that Alto K10 owners have easy access to maintenance and repairs. This extensive service infrastructure enhances the ownership experience, particularly in remote areas where finding qualified technicians can be challenging. Furthermore, the Alto K10 enjoys high resale value due to its popularity and reliability, making it a smart investment.`,
  },
  {
    title: "5. Affordable Pricing",
    content: `Starting at around Rs 3.99 lakh, the Alto K10 is one of the most affordable hatchbacks available in India today. This competitive pricing makes it an attractive option for budget-conscious buyers seeking quality without breaking the bank. The combination of low initial cost and excellent fuel efficiency means lower overall running costs, making it an economical choice in the long run.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Alto K10
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
            {/* <time dateTime={`2024-10-15`} className="">
              Tue Oct 15 2024
            </time> */}
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Alto K10 is a standout choice in the
            entry-level hatchback segment, appealing to first-time car buyers
            and urban commuters alike. Here are five compelling reasons to
            consider the Alto K10 for your next vehicle.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}

          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Alto K10 is an excellent option for anyone
            looking for an entry-level hatchback that offers exceptional fuel
            efficiency, peppy performance, spacious interiors, strong
            after-sales support, and affordability. Whether you&apos;re a
            first-time car buyer or someone needing a reliable city car, the
            Alto K10 delivers on multiple fronts, ensuring you get great value
            for your investment.
          </p>
          <p>
            Book your test drive today at your nearest Sky Automobiles
            Dealership
          </p>
        </article>
      </div>
    </div>
  );
};

export default Page;
