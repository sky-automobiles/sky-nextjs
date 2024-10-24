"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useAppContext } from "@/context";

const ReviewsAndRecom = () => {
  const { selectedState } = useAppContext();
  const blogsData = [
    {
      review:
        "A smooth and enjoyable Alto k10 car buying Experience at sky automobiles arena bhubaneswar.Thanks to the entire team.",
      name: "Mr. Nilu Kumar Das",
      rating: "5",
    },
    {
      review:
        "The experience of getting my new maruti suzuki wagon r purchase at sky automobiles patia arena Bhubaneswar. Thanks to sky team",
      name: "Mr. chitta ranjan bhuyan",
      rating: "5",
    },
    {
      review:
        "The process of buying my new wagonr car at sky automobiles patia was very pleasant.",
      name: "Mr. Santosh Kumar",
      rating: "5",
    },
    {
      review:
        "My new maruti suzuki brezza car 🚗 purchase at sky automobiles patia was extremely positive.",
      name: "Mr. P raja Rao",
      rating: "5",
    },
    {
      review:
        "Visited Nexa Hanspal Showroom to look for Fronx Delta Plus. Ms Subhashree has attended us ans clarified all our doubts and questions very promptly. She has too good product knowledge. We will be booking it soon.",
      name: "Mr. Sandip Panda",
      rating: "5",
    },
    {
      review:
        "Service is excellent,Behaviour of sales persons, other staff are good in nexa twin City, Naharakanta & delivery time is very less with all set. Excellent experience",
      name: "Mrs. Satya Narayan Mishra",
      rating: "5",
    },
    {
      review:
        "The nexa showroom near hanspal have a excellent overall performance towards for the purchase of new car with fulfilling all the criteria of the customer and the relationship by the sales personal namely Dyutimaya sasmal and Somanath Swain is excellent. I am very much thank to all the staff of Maruti nexa for their service.",
      name: "Mr. Ajay Rath",
      rating: "5",
    },
    {
      review:
        "When I reach the sky showroom RM behaviour is so good mostly Wilson sir. He is the best RM. polite behaviour supportive person. I'm very happy 😊",
      name: "Mr. Ritik pandariya",
      rating: "5",
    },
    {
      review:
        "All staff are copretive and All process are very good and all staff's person behaviour is very polite I'm happy to buying my car from Sky Automobiles 👍,,,,Sales executive masuk soni sir are very supportive they are very helpful and I'm buying I 'm ertiga showroom Dilevery process is excellent",
      name: "Mr. Pankaj Pradhan",
      rating: "5",
    },
    {
      review:
        "I have a huge genuine experience in the showroom. All staff i have meet was literally polite and helpful and i they will also gentle whom i haven't meet. overall experience was excellent 👌",
      name: "Mr. Poornima Sahu",
      rating: "5",
    },
    {
      review:
        "Its was a wonderful experience from my 1st visit till the delivery in Sky Automobiles. Very good interaction with staffs Mr. Lukesh and Mr. Nomesh and everyone all. Thanks a lot!",
      name: "Mr. Vishwaroop Chandra Deo",
      rating: "5",
    },
    {
      review:
        "I had really good experience with the showroom , I really loved the service and the staff of sky automobiles mohaba bazar",
      name: "Mr. Sakshi Sen",
      rating: "5",
    },
    {
      review:
        "Excellent service by the delivery agent Mr.Akash Singh Sir through out the purchasing process. Thank you soo much Maruti Suzuki Arena Mohaba for the awesome delivery, Staff members were too polite , well behaved, over all I loved the service.",
      name: "Mr. Vidhi manjhi ",
      rating: "5",
    },
    {
      review:
        "I have recently purchased my Jimny from Sky Automobiles Nexa. My experience of buying car from this Sky Nexa Showroom has been fantabulous. Staff is really very cooperative. I really loved to b part of this showroom.",
      name: "Mr. Shivam Verma ",
      rating: "5",
    },
    {
      review:
        "I have recently purchased My Grand Vitara from Sky Automobiles Nexa Magneto. I must say these people have been truly amazing. Everything was at place and before time. My car was ready for the unveiling. Ceremony was grand and my experience has been excellent. This Sky Nexa showroom beside Magneto mall is what I’ll definitely recommend due to its Welcome experience, hospitality and timely management.",
      name: "Mr. Vardan Sharma ",
      rating: "5",
    },
    {
      review:
        "Today I purchased a Baleno and had a superb experience. The executives were very cooperative, making the entire process smooth. Delivery was timely, and the service was excellent!",
      name: "Mr. Amandeep gulati",
      rating: "5",
    },
  ];

  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container pt-4 pb-10 mx-auto overflow-hidden">
      <h2 className="my-10 text-3xl font-semibold text-center select-none">
        Testimonials
      </h2>
      <div className="container mx-auto mb-10 overflow-visible select-none">
        <Swiper
          loop={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation !== "boolean" &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="relative overflow-visible mySwiper"
        >
          {blogsData.map((x, i) => (
            <SwiperSlide key={i} className="overflow-hidden">
              <div
                className={`h-full m-2 overflow-hidden duration-200 border hover:text-white bg-secondaryGray3 rounded-xl group hover:border-primary  ${
                  selectedState === "Odisha"
                    ? "hover:bg-primaryBlue"
                    : "hover:bg-primaryRed"
                }`}
              >
                <div className="p-4 my-auto space-y-3 text-left lg:p-6">
                  <div className="flex gap-2 pb-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`${
                          idx < parseInt(x.rating) && selectedState === "Odisha"
                            ? "text-primaryBlue group-hover:text-white"
                            : idx < parseInt(x.rating)
                            ? "text-primaryRed group-hover:text-white"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="pb-2 text-sm tracking-wide text-justify">
                    {x.review}
                  </div>
                  <div className="text-sm italic text-primaryGray group-hover:text-white">
                    ~ {x.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsAndRecom;
