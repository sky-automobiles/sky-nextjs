import React from "react";

const Page = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto xl:max-w-5xl py-6 md:py-10">
        <article className="mb-4 lg:mb-10">
          <h1 className="text-3xl font-bold mb-2">
            Fuel Efficiency of Grand Vitara Strong Hybrid Compared
          </h1>
          <p className="text-sm font-medium my-4">
            Published by: Sky Automobiles
           
          </p>
          <p className="mb-3">
            The 2024 Maruti Suzuki Grand Vitara Strong Hybrid stands out in the
            compact SUV segment, particularly due to its impressive fuel
            efficiency. Here’s how its fuel efficiency compares to other SUVs in
            the same category.
          </p>

          <div className="mb-4">
            <h5 className="text-xl font-medium my-2">
              Fuel Efficiency Overview
            </h5>
            <p className="">
              The Grand Vitara Strong Hybrid boasts a claimed fuel efficiency of
              27.97 km/l, making it one of the most fuel-efficient vehicles in
              India. In real-world testing, it has shown to achieve
              approximately 25.45 km/l in city conditions and around 21.97 km/l
              on highways. This performance is significantly higher than many
              conventional and mild hybrid SUVs in its class.
            </p>
          </div>
          <div className="mb-4">
            <h5 className="text-xl font-medium my-2">
              Comparison with Competitors
            </h5>

            <ul className="list-disc ml-4 lg:ml-10">
              <li>
                <span className="font-bold">Tata Nexon:</span> The Nexon, a
                popular choice in the compact SUV segment, offers a mileage of
                around 21.5 km/l for its petrol variants. While efficient, it
                does not match the Grand Vitara Strong Hybrid&apos;s figures,
                particularly in city driving conditions where the hybrid
                technology shines.
              </li>
              <li>
                <span className="font-bold">Hyundai Creta:</span> The
                Creta&apos;s petrol variants deliver approximately 17-18 km/l,
                depending on the engine choice and driving conditions. This
                places it considerably behind the Grand Vitara Strong Hybrid,
                which can achieve nearly 25 km/l in similar urban settings.
              </li>
              <li>
                <span className="font-bold">Kia Seltos: </span>
                Similar to the Creta, the Seltos offers a fuel efficiency range
                of about 17-19 km/l for its petrol models. Again, this falls
                short compared to the Grand Vitara&apos;s strong hybrid
                performance.
              </li>
              <li>
                <span className="font-bold">Honda HR-V:</span> The HR-V is known
                for its spaciousness but offers a mileage of around 18-20 km/l,
                which is still less than what the Grand Vitara Strong Hybrid can
                deliver.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-xl font-medium my-2">Real-World Performance</h5>
            <p>
              In practical terms, drivers have reported that the Grand Vitara
              Strong Hybrid can achieve between 25-28 km/l under various driving
              conditions, including heavy traffic scenarios where it can operate
              on electric power alone for extended periods. This capability is
              largely due to its efficient hybrid system that utilizes
              regenerative braking and electric motor assistance during
              low-speed driving.
            </p>{" "}
          </div>

          {/* Conclusion */}
          <p className="mt-4 mb-2">
            The Maruti Suzuki Grand Vitara Strong Hybrid clearly leads its
            segment in terms of fuel efficiency, outperforming traditional
            petrol and diesel options as well as other hybrids. With its
            impressive mileage figures and advanced hybrid technology, it
            presents a compelling choice for buyers looking for an eco-friendly
            yet powerful SUV option. Whether navigating city streets or cruising
            on highways, the Grand Vitara Strong Hybrid offers a blend of
            performance and economy that is hard to beat in today’s market.
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
