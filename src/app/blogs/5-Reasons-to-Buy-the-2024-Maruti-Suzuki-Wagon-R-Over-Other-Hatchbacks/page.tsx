import React from "react";

const reasons = [
  {
    title: "1. Exceptional Fuel Efficiency",
    content: `The Wagon R excels in fuel economy, with petrol variants achieving impressive mileage figures of up to 25.19 km/l for the 1.0-liter AMT variant and 24.43 km/l for the 1.2-liter AMT variant. This makes it one of the most fuel-efficient options in its class, ideal for daily commuters looking to minimize fuel expenses while enjoying a reliable vehicle.`,
  },
  {
    title: "2. Spacious and Versatile Interior",
    content: `Designed with practicality in mind, the Wagon R offers a spacious cabin that comfortably seats five passengers. With a boot space of 341 liters, it provides ample room for luggage or groceries, making it perfect for families or those needing extra storage. The rear seats can also be folded down for additional cargo space, enhancing its versatility compared to rivals like the Tata Tiago or Hyundai Santro.`,
  },
  {
    title: "3. Modern Safety Features",
    content: `Safety is a key focus in the 2024 Wagon R, which comes equipped with essential safety features such as dual front airbags, ABS with EBD, and rear parking sensors. These features contribute to its solid safety credentials, ensuring peace of mind for drivers and passengers alike. Many competitors may not offer such comprehensive safety features across all variants.`,
  },
  {
    title: "4. User-Friendly Technology",
    content: `The Wagon R is equipped with a 7-inch touchscreen infotainment system that supports Android Auto and Apple CarPlay, enhancing connectivity and entertainment options while on the road. Additional features like steering-mounted audio controls and Bluetooth connectivity make it a tech-savvy choice in the hatchback segment, appealing to younger buyers and tech enthusiasts.`,
  },
  {
    title: "5. Strong After-Sales Support",
    content: `Maruti Suzuki's extensive service network is another significant advantage of choosing the Wagon R. With over 5,000 service centers across India, owners can expect easy access to maintenance and repairs, ensuring a hassle-free ownership experience compared to brands with limited service availability.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Wagon R Over Other
            Hatchbacks
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
          
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Wagon R continues to be a popular choice in
            the hatchback segment, offering a perfect blend of practicality,
            efficiency, and modern features. Here are five compelling reasons to
            consider the Wagon R over its competitors.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Wagon R stands out in the crowded hatchback
            market due to its exceptional fuel efficiency, spacious interior,
            modern safety features, user-friendly technology, and robust
            after-sales support. With prices starting at around Rs 5.54 lakh, it
            offers excellent value for money compared to other hatchbacks like
            the Maruti Celerio or Tata Tiago. Whether you are navigating city
            streets or embarking on family trips, the Wagon R is designed to
            meet diverse driving needs while ensuring comfort and reliability.
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
