import React from "react";

const reasons = [
  {
    title: "1. Unmatched Fuel Efficiency",
    content: `One of the standout features of the Grand Vitara Strong Hybrid is its exceptional fuel efficiency. With a claimed mileage of up to 27.97 km/l, it ranks as one of the most fuel-efficient vehicles in India. In real-world conditions, it achieves around 25.45 km/l in city driving, significantly outperforming many conventional SUVs and even its mild hybrid variant, which delivers around 20.58 km/l. This makes it an ideal choice for those looking to save on fuel costs without compromising on performance.`,
  },
  {
    title: "2. Powerful Hybrid Performance",
    content: `The Grand Vitara Strong Hybrid is equipped with a 1.5-liter engine that produces a combined output of 116 PS and 141 Nm of torque, ensuring a responsive and dynamic driving experience. The e-CVT (electronic continuously variable transmission) allows for smooth acceleration and efficient power delivery, making it quicker than many competitors, clocking 0-100 km/h in approximately 12 seconds. This blend of power and efficiency sets it apart in the crowded compact SUV market.`,
  },
  {
    title: "3. Advanced Safety Features",
    content: `Safety is paramount in the Grand Vitara Strong Hybrid, which comes with a comprehensive suite of safety features including six airbags, ABS with EBD, electronic stability control (ESC), and hill hold assist. These features contribute to a robust safety profile that provides peace of mind for families and everyday drivers alike. The vehicle's design and safety technologies make it a reliable choice for those prioritizing safety.`,
  },
  {
    title: "4. Premium Interior and Technology",
    content: `The interior of the Grand Vitara Strong Hybrid is designed for comfort and convenience, featuring all-black interiors with gold inserts for a premium feel. It comes equipped with a 9-inch touchscreen infotainment system that supports Android Auto and Apple CarPlay, along with additional features like ventilated seats and a heads-up display. These modern amenities enhance the overall driving experience, making it more enjoyable compared to other models in its class.`,
  },
  {
    title: "5. Robust After-Sales Support",
    content: `Maruti Suzuki's extensive service network is another significant advantage of choosing the Grand Vitara Strong Hybrid. With over 5,000 service centers across India, owners can expect easy access to maintenance and repairs, ensuring a hassle-free ownership experience. This level of support is crucial for buyers looking for long-term reliability and convenience.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Grand Vitara Strong Hybrid
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
           
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Grand Vitara Strong Hybrid is making waves in
            the compact SUV segment, offering a unique combination of
            performance, efficiency, and advanced features. Here are five
            compelling reasons to consider this hybrid model over its
            competitors.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Grand Vitara Strong Hybrid stands out in the
            compact SUV segment due to its unmatched fuel efficiency, powerful
            hybrid performance, advanced safety features, premium interior
            technology, and robust after-sales support. With prices starting at
            approximately Rs 18.32 lakh, it offers excellent value compared to
            other hybrids and conventional SUVs available today. Whether
            you&apos;re navigating city streets or embarking on weekend
            adventures, the Grand Vitara Strong Hybrid is designed to meet
            diverse driving needs while ensuring comfort and reliability.
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
