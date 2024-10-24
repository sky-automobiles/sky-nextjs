"use client";
import QuickActions from "@/components/home/QuickActions";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import React from "react";
import { FaCheck } from "react-icons/fa";

const PrivacyPolicy = () => {
  const { selectedState } = useAppContext();
  return (
    <div className="">
      <Header />
      <div className="min-h-[50vh] ">
        <div className="pt-20 min-h-20 bg-primaryGray"></div>
        {/* <div className="pt-20 min-h-40 bg-primaryGray">
          <img
            src="/images/other/sky-automobile-book-now-banner.jpg"
            alt="Service Banner"
            className="object-cover w-full h-full -mt-1 max-h-[50vh]"
          />
        </div> */}
        <div className="container   mx-auto xl:max-w-7xl border-b-2    px-2 mb-10 pt-20 lg:pt-40 ">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6 text-center">
            Get in{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Touch{" "}
            </span>{" "}
          </h4>
          <div
            className={`h-16 w-16 rounded-full border-2 mx-auto flex justify-center items-center  mb-4 ${
              selectedState === "Odisha"
                ? "text-primaryBlue border-primaryBlue"
                : "text-primaryRed border-primaryRed"
            }`}
          >
            <FaCheck className="text-3xl" />
          </div>
          <p className="text-xl  text-primaryGray text-center font-medium mb-1">
            {" "}
            Your given details submitted successfully.
          </p>
          <p className="texsm text-primaryGray text-center mb-20">
            Someone from Sky Automobiles will get in touch with you soon.
          </p>
        </div>
          <QuickActions isHeading={false} />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
