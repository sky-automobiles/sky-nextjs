import React from "react";

const reasons = [
  {
    title: "1. Impressive Fuel Efficiency",
    content: `The Maruti Suzuki Fronx offers excellent fuel economy, with a mileage ranging from 20.01 km/l to 22.89 km/l, depending on the variant and fuel type. This makes it one of the most fuel-efficient options in its class, appealing to budget-conscious buyers and daily commuters looking to save on fuel costs.`,
  },
  {
    title: "2. Powerful Engine Options",
    content: `The Fronx comes equipped with two petrol engine options: a 1.0-liter turbocharged engine generating 98.69 bhp and a 1.2-liter engine producing 89 bhp. This range provides buyers with flexibility in choosing the performance that best suits their driving style, whether they prefer a peppy city drive or a more robust performance on highways.`,
  },
  {
    title: "3. Spacious and Comfortable Interior",
    content: `Designed with passenger comfort in mind, the Fronx features a spacious cabin that comfortably seats five adults. With a boot space of 308 liters, it offers ample storage for luggage or groceries, making it practical for families or individuals with active lifestyles. The thoughtfully designed interior also includes features like automatic climate control and multiple storage compartments for added convenience.`,
  },
  {
    title: "4. Advanced Safety Features",
    content: `Safety is a top priority in the Fronx, which is equipped with essential safety features such as dual front airbags, ABS with EBD, and electronic stability control (ESC). These features contribute to a solid safety profile, ensuring peace of mind for drivers and passengers alike. The vehicle also includes ISOFIX child seat mounts, enhancing safety for younger passengers.`,
  },
  {
    title: "5. Modern Technology Integration",
    content: `The Fronx is packed with modern technology features, including a 7-inch touchscreen infotainment system that supports Android Auto and Apple CarPlay for seamless connectivity. Additional tech features like steering-mounted controls and rear parking sensors enhance the driving experience, making it more enjoyable and user-friendly compared to competitors.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Fronx
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
          
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Fronx has emerged as a compelling choice in
            the compact SUV segment, combining modern design, efficiency, and
            advanced features. Here are five reasons why the Fronx deserves your
            attention.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Fronx stands out in the compact SUV market
            due to its impressive fuel efficiency, powerful engine options,
            spacious interior, advanced safety features, and modern technology
            integration. With prices starting at around Rs 8.44 lakh, it offers
            excellent value for money compared to other SUVs in its segment.
            Whether you&apos;re navigating city streets or embarking on weekend
            adventures, the Fronx is designed to meet diverse driving needs
            while ensuring comfort and reliability.
          </p>
          <p>
            Book your test drive today at your nearest Sky Automobiles
            Dealership.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Page;
