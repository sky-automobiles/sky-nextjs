import React from "react";

const reasons = [
  {
    title: "1. Impressive Safety Ratings",
    content: `The 2024 Brezza has achieved a commendable 4-star rating in the Global NCAP crash tests, showcasing its commitment to passenger safety. Equipped with advanced safety features such as dual front airbags, ABS with EBD, and electronic stability control (in higher variants), the Brezza provides peace of mind for families and commuters alike. This focus on safety makes it one of the more reliable options in its segment compared to rivals like the Tata Nexon or Hyundai Venue, which may not offer similar ratings across all variants.`,
  },
  {
    title: "2. Spacious and Versatile Interior",
    content: `The Brezza offers a roomy cabin that comfortably accommodates five passengers. With ample legroom and headroom, it is designed for both comfort and practicality. The rear seats can be folded down to expand the boot space, making it ideal for families or those needing extra cargo capacity for road trips or shopping excursions. This versatility sets it apart from competitors that may have more cramped interiors.`,
  },
  {
    title: "3. Modern Technology Features",
    content: `The 2024 Brezza comes equipped with a state-of-the-art 9-inch touchscreen infotainment system that supports wireless Android Auto and Apple CarPlay. Additional features like automatic climate control, keyless entry, and push-button start enhance the driving experience, making it a tech-savvy choice in the subcompact SUV category. Many competitors still rely on older technology interfaces, giving the Brezza an edge in user experience.`,
  },
  {
    title: "4. Strong Performance and Fuel Efficiency",
    content: `Powered by a 1.5-liter K15C petrol engine that produces 102 bhp and 136.8 Nm of torque, the Brezza offers a balanced performance suitable for both city driving and highway cruising. It also boasts impressive fuel efficiency figures—up to 17 km/l—making it an economical choice for daily commuters. This combination of performance and efficiency is often hard to find in other subcompact SUVs.`,
  },
  {
    title: "5. Extensive After-Sales Support",
    content: `Maruti Suzuki's extensive service network is one of its standout features, with over 5,000 service centers across India. This ensures that Brezza owners have easy access to maintenance and repairs, significantly reducing downtime compared to brands with limited service availability. This robust after-sales support is a crucial consideration for many buyers looking for long-term reliability.`,
  },
];

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            5 Reasons to Buy the 2024 Maruti Suzuki Brezza Over Other Subcompact
            SUVs
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
          
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Brezza has emerged as a strong contender in
            the subcompact SUV market, combining style, safety, and
            practicality. Here are five compelling reasons to choose the Brezza
            over its competitors.
          </p>

          {reasons.map((reason, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-xl font-medium my-2">{reason.title}</h5>
              <p className="">{reason.content}</p>
            </div>
          ))}
          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The 2024 Maruti Suzuki Brezza stands out in the subcompact SUV
            segment due to its impressive safety ratings, spacious interior,
            modern technology features, strong performance, and extensive
            after-sales support. With prices starting at around Rs 8.29 lakh, it
            offers excellent value for money compared to other options like the
            Kia Sonet or Mahindra XUV300. Whether you are navigating city
            streets or embarking on family adventures, the Brezza is designed to
            meet diverse driving needs while ensuring safety and comfort.
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
