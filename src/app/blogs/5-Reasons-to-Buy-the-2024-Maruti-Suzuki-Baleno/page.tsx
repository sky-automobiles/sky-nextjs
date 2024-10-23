import React from "react";

const reasons = [
  {
    title: "1. Exceptional Fuel Efficiency",
    content: `The Baleno is renowned for its outstanding fuel economy, achieving an impressive 22.94 km/l on the highway and around 19 km/l in city conditions. This makes it one of the most fuel-efficient options in its class, ideal for daily commuters and those looking to save on fuel costs without sacrificing performance.`,
  },
  {
    title: "2. Powerful Engine Options",
    content: `Under the hood, the Baleno features a 1.2-liter K-Series Dual Jet Dual VVT engine, delivering 88.50 bhp and 113 Nm of torque. This engine is designed for both efficiency and performance, providing a lively driving experience whether you’re navigating city streets or cruising on highways. The availability of an automatic transmission option enhances convenience, especially in stop-and-go traffic.`,
  },
  {
    title: "3. Spacious and Comfortable Interior",
    content: `The Baleno offers a roomy interior that comfortably seats five passengers, with ample headroom and legroom. Its boot space of 318 liters is one of the largest in its segment, making it practical for families or individuals needing extra storage for luggage or groceries. The thoughtful design includes features like rear AC vents and a cooled glovebox for added comfort.`,
  },
  {
    title: "4. Advanced Safety Features",
    content: `Safety is a priority in the Baleno, which comes equipped with essential features such as dual airbags, ABS with EBD, and rear parking sensors. Higher variants also include additional safety technologies like six airbags, electronic stability control (ESC), and ISOFIX child seat mounts. These features contribute to a solid safety profile, ensuring peace of mind for drivers and passengers alike.`,
  },
  {
    title: "5. Modern Technology Integration",
    content: `The Baleno is packed with modern technology features that enhance the driving experience. It includes a 9-inch SmartPlay Pro+ infotainment system that supports wireless Android Auto and Apple CarPlay, allowing seamless connectivity with smartphones. Additional tech features like a heads-up display (HUD), 360-degree camera, and real-time vehicle tracking through Suzuki Connect make it one of the most technologically advanced offerings in its segment.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Baleno
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
          
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Baleno continues to be a popular choice in
            the premium hatchback segment, offering a blend of style,
            performance, and advanced features. Here are five compelling reasons
            to consider the Baleno for your next vehicle purchase.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Baleno combines exceptional fuel efficiency,
            powerful engine options, spacious interiors, advanced safety
            features, and modern technology integration into an attractive
            package for hatchback buyers. With prices starting at around Rs 6.49
            lakh, it offers excellent value for money compared to other premium
            hatchbacks like the Hyundai i20 and Tata Altroz. Whether you’re
            commuting in the city or embarking on weekend getaways, the Baleno
            is designed to meet diverse driving needs while ensuring comfort and
            reliability.
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
