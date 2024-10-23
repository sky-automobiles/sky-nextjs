"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useAppContext } from "@/context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const AddonsSlider = () => {
  const { selectedState } = useAppContext();
  const blogsData = [
    {
      title: "Zero Depreciation",
      desc1:
        "The Zero Depreciation add-on ensures 100% coverage for part replacements or repairs without depreciation deductions. Customers should only pay a compulsory deductible —₹1000 for engines below 1500 cc and ₹2000 for engines above 1500 cc. It covers accidental damage to batteries and tyres.",
      img: "/icons/addons1.png",
    },
    {
      title: "Consumables",
      desc1:
        "The Consumables add-on cover for car insurance safeguards against the cost of replacing essential consumable items like nuts, bolts, and lubricant. It ensures you’re not required to pay any extra amount for these often overlooked, yet vital, components during repairs, hence, enhancing your policy for a complete vehicle maintenance and peace of mind.",
      img: "/icons/addons2.png",
    },
    {
      title: "Key Protect Cover",
      desc1:
        "The Key Protect cover provides security for your car keys. It covers the costs of replacement or repair in cases of loss, theft, or damage, including labour charges. With premiums starting at a nominal amount, it ensures peace of mind without affecting your No Claim Bonus, even if ownership is transferred.",
      img: "/icons/addons3.png",
    },
    {
      title: "Loss Of Personal Belongings",
      desc1:
        "Protect your valuables on the go with the Loss of Personal Belongings Cover for private vehicles within five years of purchase. This add-on secures items like mobiles, laptops, and bags up to Rs. 50,000 against theft or forced entry, allowing two claims per year with a simple FIR for claims.",
      img: "/icons/addons4.png",
    },
    {
      title: "Road-Side Assistance Cover",
      desc1:
        "Ensure peace of mind with Roadside Assistance Cover, offering swift aid for breakdowns due to mechanical or electrical issues. For a minimal fee, access towing, repair services, and more with just a call, ensuring you’re never stranded. A small investment for significant convenience and security on the road.",
      img: "/icons/addons5.png",
    },
    {
      title: "Tyre Protect Cover",
      desc1:
        "The Tyre Protect Cover is an essential add-on for new private vehicle owners, safeguarding against tyre damage even when the vehicle is unharmed. Available exclusively for the first three years, it offers a one-time claim without affecting the No Claim Bonus, for a nominal premium.",
      img: "/icons/addons6.png",
    },
    {
      title: "Engine Protect Cover",
      desc1:
        "The Engine Protect cover is a valuable add-on to safeguard against consequential losses not covered by conventional motor insurance. This includes engine seizure from driving through water or due to a damaged oil sump, and gearbox seizure resulting from accidental damage leading to oil leakage.",
      img: "/icons/addons7.png",
    },
    {
      title: "Return to Invoice",
      desc1:
        "The Return to Invoice cover provides financial protection in theft or total loss scenarios, potentially covering the cost of a new car model, including insurance, road tax, and registration. The insurance company bears the difference between the vehicle’s insured value and the current purchase price of a new equivalent vehicle.",
      img: "/icons/addons8.png",
    },
    {
      title: "HEV Secure",
      desc1:
        "The cover indemnifies Insured for the expenses incurred against repair or replacement due to consequential loss/damages to Hybrid Battery, its allied parts and all HEV components arising out of Unexpected power surge, Water ingression, Short Circuit, Spontaneous, unexplained, and uncontrolled exothermic electrochemical reactions resulting in explosion of and or visible flames and or smoke. ",
      img: "/icons/HEVSecure.png",
    },
  ];

  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container mx-auto mb-10 mt-6 overflow-visible select-none">
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
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="relative overflow-visible mySwiper "
      >
        {blogsData.map((x, i) => (
          <SwiperSlide key={i} className="overflow-hidden">
            <div
              className={`h-full m-2 overflow-hidden duration-200 border  bg-secondaryGray4 rounded-xl group hover:border-primary hover:shadow-lg  `}
            >
              <div className="p-4 my-auto space-y-3 text-left lg:p-6">
                <div className="pb-2 text-sm tracking-wide text-justify">
                  <Image
                    src={x.img}
                    alt=""
                    width={50}
                    height={50}
                    className="max-w-12"
                  />
                </div>
                <div className={`  tracking-wide   `}>
                  {x.title}
                </div>
                <div
                  title={x.desc1}
                  className={`text-xs  text-primaryGray    line-clamp-6 `}
                >
                  {x.desc1}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-6">
        <div
          ref={navigationPrevRef}
          className={`flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer hover:text-white border-secondaryGray2 ${
            selectedState === "Odisha"
              ? "hover:border-primaryBlue hover:bg-primaryBlue"
              : "hover:border-primaryRed hover:bg-primaryRed"
          }`}
        >
          <AiOutlineArrowLeft />
        </div>
        <div
          ref={navigationNextRef}
          className={`flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer hover:text-white border-secondaryGray2 ${
            selectedState === "Odisha"
              ? "hover:border-primaryBlue hover:bg-primaryBlue"
              : "hover:border-primaryRed hover:bg-primaryRed"
          }`}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default AddonsSlider;
