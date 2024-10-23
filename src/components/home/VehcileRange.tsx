"use client";
import React from "react";
import RangeSlider from "./RangeSlider";
import { useAppContext } from "@/context";

const VehcileRange = () => {
  const [selected, setSelected] = React.useState("Arena");
   const { selectedState } = useAppContext();
  return (
    <div className="py-10 md:pt-16 lg:pt-24">
      <div className="container mx-auto mb-8 ">
        <h4 className="text-3xl font-bold text-center text-primaryGray">
          Our Vehicle Range
        </h4>
        <div className="flex justify-center gap-3 mt-4 text-xl">
          {/* <button
            onClick={() => setSelected("All")}
            className={` font-semibold px-2 border-b-2  ${
              selected === "All" && selectedState === "Odisha"
                ? "text-primaryBlue border-b-primaryBlue"
                : selected === "All"
                ? "text-primaryRed border-b-primaryRed"
                : "text-secondaryGray2"
            }
            `}
          >
            All
          </button> */}
          <button
            onClick={() => setSelected("Arena")}
            className={` font-semibold px-2 border-b-2 ${
              selected === "Arena" && selectedState === "Odisha"
                ? "text-primaryBlue border-b-primaryBlue"
                : selected === "Arena"
                ? "text-primaryRed border-b-primaryRed"
                : "text-secondaryGray2"
            }`}
          >
            Arena
          </button>
          <button
            onClick={() => setSelected("Nexa")}
            className={` font-semibold px-2 border-b-2  ${
              selected === "Nexa" && selectedState === "Odisha"
                ? "text-primaryBlue border-b-primaryBlue"
                : selected === "Nexa"
                ? "text-primaryRed border-b-primaryRed"
                : "text-secondaryGray2"
            }
            `}
          >
            Nexa
          </button>
        </div>
      </div>
      <RangeSlider selected={selected} />
    </div>
  );
};

export default VehcileRange;
