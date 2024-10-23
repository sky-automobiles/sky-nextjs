import React from "react";

const reasons = [
  {
    title: "1. Outstanding Fuel Efficiency",
    content: `One of the standout features of the 2024 Swift is its exceptional
              fuel efficiency. With petrol variants achieving up to 25.75 km/l and
              CNG variants offering around 32.85 km/kg, it outperforms many rivals
              in its class, such as the Hyundai Grand i10 Nios, which offers lower
              mileage figures. This makes the Swift an ideal choice for
              budget-conscious consumers looking to save on fuel costs while
              enjoying a reliable vehicle.`,
  },
  {
    title: "2. Spacious and Comfortable Interior",
    content: `The new Swift is designed with passenger comfort in mind. It is 45
              mm longer and 55 mm wider than previous models, providing ample
              space for both front and rear occupants. The interior features a
              modern dashboard with a 9-inch SmartPlay Pro+ touchscreen, rear AC
              vents, and a spacious boot, making it practical for daily use and
              long trips alike.`,
  },
  {
    title: "3. Robust Safety Features",
    content: `Safety is a top priority in the 2024 Swift, which comes equipped
              with six airbags, ABS with EBD, electronic stability control (ESC),
              and a rear parking camera as standard across variants. These
              features contribute to its high safety ratings, making it a reliable
              choice for families and safety-conscious drivers.`,
  },
  {
    title: "4. Modern Technology Integration",
    content: `The Swift stands out with its advanced technological features,
              including wireless Android Auto and Apple CarPlay compatibility, a
              wireless charger, and Suzuki Connect for real-time vehicle tracking.
              This tech-savvy approach enhances the driving experience, setting it
              apart from competitors that may not offer similar capabilities.`,
  },
  {
    title: "5. Strong After-Sales Support",
    content: `Maruti Suzuki's extensive service network is another advantage
              of choosing the Swift. With over 5,000 service touchpoints across
              India, owners can expect hassle-free maintenance and repairs. This
              level of support is often unmatched by other brands in the hatchback
              segment, ensuring peace of mind for buyers.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Swift Over Other Hatchbacks
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
          
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Swift has made a significant impact in the
            hatchback segment, offering a blend of style, efficiency, and
            advanced features. Here are five compelling reasons why you should
            consider the new Swift over its competitors.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4">
            Book your test drive today at your nearest Sky Automobiles
            Dealership.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Page;
