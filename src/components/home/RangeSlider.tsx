"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { useAppContext } from "@/context";
import { models } from "@/constants";

interface SlideProps {
  selected: string;
}

const RangeSlider: React.FC<SlideProps> = ({ selected }) => {
  const { selectedState } = useAppContext();
  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null); // Create a reference for Swiper instance

  // Determine the slide data based on the selected prop
  const filteredModels =
    selected === "Nexa"
      ? models.slice(9)
      : selected === "Arena"
      ? models.slice(0, 9)
      : models;

  // Reset Swiper slide to 0 whenever `selected` changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Slide to index 0
    }
  }, [selected]);

  return (
    <div className="pl-2 overflow-visible select-none">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }} // Set swiperRef to the Swiper instance
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Ensure that the navigation parameters are properly set and defined
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
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="relative mx-4 overflow-visible mySwiper"
      >
        {filteredModels?.map((slide, index) => (
          <SwiperSlide key={index} className="mt-4">
            <Link
              href={`${
                selectedState === "Odisha" ? slide.linkOD : slide.linkCG
              }`}
            >
              <div
                className={`rounded-xl overflow-hidden hover:shadow-lg cursor-pointer w-[400px] py-10 px-2 flex flex-col gap-1 group ${
                  selectedState === "Odisha"
                    ? "hover:bg-primaryBlue"
                    : "hover:bg-primaryRed"
                }`}
              >
                <img
                  src={slide.thumbnail}
                  alt={slide.subName}
                  className={`scale-x-[-1] mb-4 px-2 lg:px-0  mx-auto ${
                    selected === "Nexa" ? "max-w-[290px]" : "max-w-[350px]"
                  }`}
                />
                <h5 className="text-xl font-bold text-center uppercase group-hover:text-white lg:text-2xl lg:font-extrabold">
                  {slide.subName}
                </h5>
                <p className="text-center group-hover:text-secondaryGray3">
                  {slide.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="flex justify-center gap-4 my-6">
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
      </Swiper>
    </div>
  );
};

export default RangeSlider;
