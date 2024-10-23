"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context";

const ModalSelectState: React.FC = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const { setSelectedState, openSelectState, setOpenSelectState } =
    useAppContext();

  const handleOnClose = (e: any) => {
    if (e.target.id === "container") setIsAnimate(true);
  };

  const handleClick = (stateName: string) => {
    setSelectedState(stateName);
    setOpenSelectState(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("openSelectState", "true");
      sessionStorage.setItem("selectedState", stateName);
    }
    document.body.style.overflow = "auto";
    console.log(stateName);
  };

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("openSelectState")) {
        setOpenSelectState(false);
      } else {
        setOpenSelectState(true);
        document.body.style.overflow = "hidden";
      }

      if (sessionStorage.getItem("selectedState")) {
        setSelectedState(sessionStorage.getItem("selectedState")!);
      }
    }
  }, []);

  useEffect(() => {
    if (isAnimate) {
      setTimeout(() => {
        setIsAnimate(false);
      }, 500);
    }
  }, [isAnimate]);

  if (!openSelectState) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-[3px] overflow-hidden bg-black bg-opacity-50"
    >
      <div
        className={`bg-gray-100 w-full max-w-[45rem] rounded py-4 m-2 md:py-6 select-none `}
      >
        <Image
          src="/images/other/logo.png"
          alt="logo"
          width={300}
          height={300}
          className="w-auto h-14 rounded-lg md:h-16 mx-auto mb-4"
        />

        <div className="w-full h-full flex justify-center items-center gap-4 flex-col md:flex-row mb-4 lg:gap-8">
          <div onClick={() => handleClick("Odisha")} className="relative">
            <Image
              src="/images/other/Odisa-Konarka_Temple.jpg"
              alt="Odisa-Konarka_Temple"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg flex justify-center items-center text-3xl text-white cursor-pointer hover:bg-blue-900 duration-200 hover:bg-opacity-30">
              Odisa
            </div>
          </div>
          <div onClick={() => handleClick("Chhattisgarh")} className="relative">
            <Image
              src="/images/other/Chhattisgarh-Bhoramdeo_Temple,_Kawardha.jpg"
              alt="Chhattisgarh-Bhoramdeo_Temple"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg flex justify-center items-center text-3xl text-white cursor-pointer duration-200 hover:bg-opacity-30 hover:shadow-2xl  group overflow-hidden">
              <div className="group-hover:h-[500px] group-hover:w-[500px] bg-red-900 duration-1000 h-0 w-0 rounded-full transition-all bg-opacity-30"></div>
              <p className="absolute">Chhattisgarh</p>
            </div>
          </div>
        </div>
        <p
          className={`text-sm font-medium my-2 text-center text-primaryBlue md:text-base ${
            isAnimate ? "animate-shake" : ""
          }`}
        >
          Select Your State From Above*
        </p>
      </div>
    </div>
  );
};

export default ModalSelectState;
