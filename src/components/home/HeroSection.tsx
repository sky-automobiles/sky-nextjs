"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { Autoplay, Navigation } from "swiper/modules";
import { useAppContext } from "@/context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = () => {
  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null); // Create a reference for Swiper instance
  const { selectedState } = useAppContext();

  return (
    <main>
      <div
        className={`relative max-h-[calc(100vh-80px)] overflow-hidden w-full bg-center  ${
          selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
        }`}
      >
        {/* <Image
          src='/images/other/main_page_scng.webp'
          alt=""
          height={600}
          width={1366}
          className=" object-cover w-full absolute bottom-0 left-0  "
        /> */}
        <div className=" overflow-visible select-none">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }} // Set swiperRef to the Swiper instance
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
            }}
            loop={true}
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
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            className="relative  overflow-visible mySwiper"
          >
            <SwiperSlide className="">
              <div className="hidden sm:block w-full">
                <Image
                  src="/images/other/main_page_strong_hybrid.webp"
                  alt=""
                  height={600}
                  width={1366}
                  className=" object-cover w-full   "
                />
              </div>
              <div className="sm:hidden w-full  ">
                <Image
                  src="/images/other/main_strong_hybrid_mobile.webp"
                  alt=""
                  height={547}
                  width={425}
                  className=" object-cover w-full   "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hidden sm:block w-full">
                <Image
                  src="/images/other/main_page_fronx.webp"
                  alt=""
                  className=" object-cover w-full   "
                  height={600}
                  width={1366}
                />
              </div>
              <div className="sm:hidden w-full">
                <Image
                  src="/images/other/main_fronx_mobile.webp"
                  alt=""
                  className=" object-cover w-full   "
                  height={547}
                  width={425}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hidden sm:block w-full">
                <Image
                  src="/images/other/main_page_swift.webp"
                  alt=""
                  className=" object-cover w-full   "
                  height={600}
                  width={1366}
                />
              </div>
              <div className="sm:hidden w-full">
                <Image
                  src="/images/other/main_swift_mobile.webp"
                  alt=""
                  className=" object-cover w-full   "
                  height={547}
                  width={425}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="hidden sm:block w-full">
                <Image
                  src="/images/other/main_page_scng.webp"
                  alt=""
                  className=" object-cover w-full   "
                  height={600}
                  width={1366}
                />
              </div>
              <div className="sm:hidden w-full">
                <Image
                  src="/images/other/main_scng_mobile.webp"
                  alt=""
                  className=" object-cover w-full   "
                  height={547}
                  width={425}
                />
              </div>
            </SwiperSlide>

            <div className="lg:flex justify-center gap-4 my-6 absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 ">
              <div
                ref={navigationPrevRef}
                className={`flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer text-white border-secondaryGray2 ${
                  selectedState === "Odisha"
                    ? "hover:border-primaryBlue hover:bg-primaryBlue"
                    : "hover:border-primaryRed hover:bg-primaryRed"
                }`}
              >
                <AiOutlineArrowLeft />
              </div>
              <div
                ref={navigationNextRef}
                className={`flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer text-white border-secondaryGray2 ${
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

        {/* <div className="absolute  -ml-4 right-1/2 duration-500 bottom-10 ">
          <div className="relative flex items-start justify-center w-7 overflow-hidden border rounded-full h-14 border-secondaryGray3 ">
            <div className="">
              <div className="w-1 h-4 mt-2 border-secondaryGray3 border-2 rounded-full  "></div>
            </div>
          </div>
          <div className="mx-auto my-1 rounded-full ">
            <IoIosArrowDown className="mx-auto text-xl animate-bounce text-secondaryGray3" />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default HeroSection;
