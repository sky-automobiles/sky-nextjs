"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";

import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdLocalPhone } from "react-icons/md";
import { PiSteeringWheel } from "react-icons/pi";
import ModalTestDrive from "./ModalTestDrive";
import { IoIosCalculator } from "react-icons/io";
import { FaCar } from "react-icons/fa";

// Define the types for the props
interface QuickActionsProps {
  isHeading?: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ isHeading }) => {
  const { selectedState } = useAppContext();
  const [showTestDrive, setShowTestDrive] = useState(false);
  return (
    <>
      <div className="container py-10 mx-auto mb-8 xl:max-w-7xl">
        {isHeading && (
          <h4 className="mb-6 text-3xl font-bold text-center text-primaryGray lg:mb-10">
            Quick Actions
          </h4>
        )}
        <div className="grid grid-cols-2 px-2 lg:grid-cols-3">
          <div
            className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue"
                : "hover:bg-primaryRed"
            }`}
          >
            <div>
              <BiSolidOffer
                className={`text-4xl lg:text-5xl  group-hover:text-white ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                } `}
                aria-label={"View Offers"}
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
                {/* Unlock exclusive savings and promotions on your next vehicle or
                service. */}
                Unlock exclusive savings on your next vehicle or service!
              </p>

              <Link href={"/offers"}>
                {" "}
                <button
                  className={`px-4 py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0 ${
                    selectedState === "Odisha"
                      ? "hover:text-primaryBlue"
                      : "hover:text-primaryRed"
                  }`}
                >
                  {" "}
                  View Offers
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue"
                : "hover:bg-primaryRed"
            }`}
          >
            <div>
              <PiSteeringWheel
                className={`text-4xl lg:text-5xl  group-hover:text-white ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                } `}
                aria-label="Book A Test Drive "
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
                Experience your dream car firsthand by scheduling a test drive.
              </p>

              <button
                className={`px-4 py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0 ${
                  selectedState === "Odisha"
                    ? "hover:text-primaryBlue"
                    : "hover:text-primaryRed"
                }`}
                onClick={() => setShowTestDrive(true)}
              >
                Book A Test Drive
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue"
                : "hover:bg-primaryRed"
            }`}
          >
            <div>
              <HiOutlineWrenchScrewdriver
                className={`text-4xl lg:text-5xl  group-hover:text-white ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                } `}
                aria-label="Book A Service"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
                Schedule expert maintenance and repairs for your vehicle with
                ease.
              </p>

              <Link href={"/services/book-a-service"}>
                {" "}
                <button
                  className={`px-4 py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0 ${
                    selectedState === "Odisha"
                      ? "hover:text-primaryBlue"
                      : "hover:text-primaryRed"
                  }`}
                >
                  Book A Service
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue"
                : "hover:bg-primaryRed"
            }`}
          >
            <div>
              <MdLocalPhone
                className={`text-4xl lg:text-5xl  group-hover:text-white ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                } `}
                aria-label="Phone Icon"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
                Reserve your ideal car today and start driving your dream
                vehicle.
              </p>

              <a
                href="tel:+91 6262325001"
                target="_blank"
                rel="noreferrer"
                className={`px-2 md:px-4 text-center py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0  ${
                  selectedState === "Odisha"
                    ? "hover:text-primaryBlue"
                    : "hover:text-primaryRed"
                }`}
              >
                Book Your Dream Car
              </a>
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue"
                : "hover:bg-primaryRed"
            }`}
          >
            <div>
              <FaCar
                className={`text-4xl lg:text-5xl  group-hover:text-white ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                } `}
                aria-label="Car Icon"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
                {/* Explore our range of new True Value cars and drive home your
                perfect match today! */}
                Discover new True Value cars and drive home your perfect match!
              </p>
              <Link href={"/truevalue/sell-a-car"}>
                {/* <Link href={"/truevalue/buy-a-car"}> */}{" "}
                <button
                  className={`px-4 py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0 ${
                    selectedState === "Odisha"
                      ? "hover:text-primaryBlue"
                      : "hover:text-primaryRed"
                  }`}
                  aria-label="TrueValue - Buy A Car Now"
                >
                   Sell Your Car Now
                </button>{" "}
              </Link>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue"
                : "hover:bg-primaryRed"
            }`}
          >
            <div>
              <IoIosCalculator
                className={`text-4xl lg:text-5xl  group-hover:text-white ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                } `}
                aria-label="Calculator Icon"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
                Effortlessly calculate your car EMI and get closer to your dream
                vehicle!
              </p>
              <Link href={"/services/finance/#emi-calculator"}>
                {" "}
                <button
                  className={`px-4 py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0 ${
                    selectedState === "Odisha"
                      ? "hover:text-primaryBlue"
                      : "hover:text-primaryRed"
                  }`}
                  aria-label="EMI Calculator"
                >
                  EMI Calculator
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalTestDrive
        showTestDrive={showTestDrive}
        setShowTestDrive={setShowTestDrive}
      />
    </>
  );
};

export default QuickActions;
