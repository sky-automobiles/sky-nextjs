import React from "react";

const reasons = [
  {
    title: "1. Outstanding Fuel Efficiency",
    content: `One of the primary attractions of the Celerio is its exceptional fuel economy. With a mileage of up to 26.68 km/l for petrol variants, it stands out as one of the most fuel-efficient cars in its segment. This impressive efficiency is particularly beneficial for daily commuters looking to save on fuel costs, making it an economical choice for city driving and long trips alike.`,
  },
  {
    title: "2. Peppy Performance",
    content: `The Celerio is powered by a 998 cc engine that produces 65.71 bhp and 89 Nm of torque, providing a lively driving experience. The lightweight design of the car enhances its agility, making it easy to navigate through congested urban environments. Additionally, the availability of an AMT (Automated Manual Transmission) option allows for a smooth driving experience, especially in stop-and-go traffic.`,
  },
  {
    title: "3. Spacious and Comfortable Interior",
    content: `Despite its compact size, the Celerio offers a surprisingly spacious interior that comfortably seats five passengers. With a boot capacity of 313 liters, it provides ample storage space for luggage or groceries, making it practical for families or individuals with active lifestyles. The cabin features thoughtful design elements that enhance comfort, such as good headroom and legroom.`,
  },
  {
    title: "4. Advanced Safety Features",
    content: `Safety is a priority in the Celerio, which comes equipped with essential safety features such as dual airbags, ABS with EBD, and rear parking sensors. These features contribute to a solid safety profile, ensuring peace of mind for drivers and passengers alike. The car also includes advanced safety technologies like impact-sensing auto door unlock and speed-sensing auto door lock.`,
  },
  {
    title: "5. Affordable Pricing and Low Maintenance Costs",
    content: `Starting at around Rs 4.99 lakh, the Celerio is one of the most affordable hatchbacks available today. Its competitive pricing makes it accessible to a wide range of buyers, including first-time car owners and budget-conscious consumers. Moreover, Maruti Suzuki's extensive service network ensures low maintenance costs and easy access to repairs, enhancing the overall ownership experience.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Celerio
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
           
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Celerio is a compact hatchback that has
            garnered attention for its blend of efficiency, comfort, and modern
            features. Here are five compelling reasons to consider the Celerio
            for your next vehicle purchase.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Celerio combines outstanding fuel efficiency,
            peppy performance, spacious interiors, advanced safety features, and
            affordability into an attractive package for hatchback buyers.
            Whether you&apos;re navigating city streets or embarking on weekend
            getaways, the Celerio is designed to meet diverse driving needs
            while ensuring comfort and reliability. With its impressive features
            and value-for-money proposition, it&apos;s definitely worth
            considering for your next vehicle purchase.
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
