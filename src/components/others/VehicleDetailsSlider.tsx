"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import the Swiper type
import type { Swiper as SwiperType } from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type ImageDetail = {
  img: string;
  title: string;
};

interface VehicleDetailsSliderProps {
  images: ImageDetail[];
}

const VehicleDetailsSlider: React.FC<VehicleDetailsSliderProps> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // or use a more specific type if available
  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
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
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 2000 }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 xl:max-w-4xl lg:rounded-xl relative select-none"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="max-h-[60vh]">
              <img
                src={image.img}
                alt={image.title}
                loading="lazy"
                className="mb-6 lg:rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <div
            ref={navigationPrevRef}
            className="flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer hover:text-white hover:bg-primaryRed border-secondaryGray2 hover:border-primaryRed"
          >
            <AiOutlineArrowLeft />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <div
            ref={navigationNextRef}
            className="flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer hover:text-white hover:bg-primaryRed border-secondaryGray2 hover:border-primaryRed"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3 xl:max-w-3xl rounded-xl select-none"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <img
                src={image.img}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
                className="h-10 rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VehicleDetailsSlider;