"use client";
import Link from "next/link";
import React, { useState } from "react";

import { FaCaretRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoClose, IoMailSharp } from "react-icons/io5";
// import { LuInstagram } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAppContext } from "@/context";
import { models } from "@/constants";
import ModalSidePannel from "./ModalSidePannel";

const Header = () => {
  const [isVehicle, setIsVehicle] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const { selectedState, setOpenSelectState } = useAppContext();
  // const { pathname } = useNavigate();
  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 duration-500 bg-white min-h-16 lg:min-h-20 `}
    >
      <div
        className={` absolute top-0 left-0 w-full  hover:text-black duration-200 transition-all   shadow `}
      >
        <div className="container flex items-center justify-between h-full  mx-auto group min-h-16 lg:min-h-20 ">
          <div className="select-none">
            <Link onMouseEnter={() => setIsVehicle(false)} href="/">
              {/* {scrolled ? ( */}
              <Image
                src="/images/other/logo.png"
                // src={require("../assets/logo2_sky.png")}
                alt="logo"
                width={300}
                height={300}
                className={`w-auto h-12 rounded-lg md:h-14 duration-500  `}
              />
            </Link>
          </div>
          <nav className="hidden gap-4 text-sm uppercase  xl:gap-8 font-poppins lg:flex whitespace-nowrap">
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/about-us"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              About Us
            </Link>
            <div
              onMouseEnter={() => setIsVehicle(true)}
              // href="/"
              className={`font-medium  flex gap-1 items-center cursor-default ${
                isVehicle && selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : isVehicle
                  ? "text-primaryRed"
                  : ""
              } `}
            >
              Vehicles <FaCaretRight className="rotate-90" />
            </div>
            <div className="relative group ">
              <div
                onMouseEnter={() => setIsVehicle(false)}
                // href="/outlets"
                className={`font-medium  peer  cursor-default flex  items-center gap-1 ${
                  selectedState === "Odisha"
                    ? "hover:text-primaryBlue"
                    : "hover:text-primaryRed"
                }`}
              >
                Services <FaCaretRight className="rotate-90" />
              </div>
              <div className=" absolute top-5 -left-1/3 w-40  hidden  peer-hover:block hover:block  delay-300 pt-[32px] -mt-0.5 ">
                <Link
                  href="/services/book-a-service"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-gray-50 hover:text-white border-y  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue hover:border-b-primaryBlue"
                      : "hover:bg-primaryRed hover:border-b-primaryRed"
                  }`}
                >
                  Book A Service <FaCaretRight />
                </Link>
                <Link
                  href="/services/finance"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-gray-50 hover:text-white border-b  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue hover:border-b-primaryBlue"
                      : "hover:bg-primaryRed hover:border-b-primaryRed"
                  }`}
                >
                  Finance <FaCaretRight />
                </Link>
                <Link
                  href="/services/insurance"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-gray-50 hover:text-white rounded-b overflow-hidden border-b ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue hover:border-b-primaryBlue"
                      : "hover:bg-primaryRed hover:border-b-primaryRed"
                  }`}
                >
                  Insurance <FaCaretRight />
                </Link>
              </div>
            </div>

            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href={`${
                selectedState === "Odisha"
                  ? "/outlets/odisha-outlets"
                  : "/outlets/chhattisgarh-outlets"
              }`}
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              Outlets
            </Link>
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/contact-us"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              Contact Us
            </Link>
            {/* <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/blogs"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              Blogs
            </Link> */}

            <div className="relative  ">
              <div
                onMouseEnter={() => setIsVehicle(false)}
                // href="/outlets"
                className={`font-medium  peer  cursor-default flex  items-center gap-1 ${
                  selectedState === "Odisha"
                    ? "hover:text-primaryBlue"
                    : "hover:text-primaryRed"
                }`}
              >
                MORE <FaCaretRight className="rotate-90" />
              </div>
              <div className=" absolute top-5 -left-1/3 w-40  hidden  peer-hover:block hover:block  delay-300 pt-[32px] rounded-b overflow-hidden -mt-0.5  ">
                <Link
                  href="/career"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-gray-50 hover:text-white border-b ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue hover:border-b-primaryBlue"
                      : "hover:bg-primaryRed hover:border-b-primaryRed"
                  }`}
                >
                  Career <FaCaretRight />
                </Link>{" "}
                <Link
                  href="/blogs"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-gray-50 hover:text-white border-b ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue hover:border-b-primaryBlue"
                      : "hover:bg-primaryRed hover:border-b-primaryRed"
                  }`}
                >
                  Blogs <FaCaretRight />
                </Link>
                <Link
                  href="/privacy-policy"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-gray-50 hover:text-white border-b ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue hover:border-b-primaryBlue"
                      : "hover:bg-primaryRed hover:border-b-primaryRed"
                  }`}
                >
                  Privacy Policy <FaCaretRight />
                </Link>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2 mr-1 ">
            {/* <button
              className={` md:px-6 py-2 rounded-full uppercase hover:bg-primaryRed  hover:shadow-xl md:text-sm px-4 text-xs ${
                scrolled ? "text-black hover:text-white" : "text-white"
              } font-medium `}
            >
              Offers
            </button> */}
            <button
              type="button"
              aria-label="Select State"
              className={`flex items-center gap-1  px-2.5 py-1.5 border rounded-full border-transparent hover:border-gray-200 hover:shadow-sm ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
              onClick={() => setOpenSelectState(true)}
            >
              <FaMapMarkerAlt className="" />
              {selectedState && (
                <p className={`  text-sm uppercase `}>
                  <span className="hidden md:block">
                    {selectedState === "Odisha" ? "Odisha" : "Chhattisgarh"}
                  </span>
                  <span className=" md:hidden">
                    {selectedState === "Odisha" ? "OD" : "CG"}
                  </span>
                </p>
              )}
              <FaCaretRight className="rotate-90" />
            </button>{" "}
            <Link
              href="/offers"
              className={` md:px-6 py-2 rounded-full uppercase   text-white md:shadow-xl md:text-sm px-4 text-xs ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              Offers
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setShowSidePanel(!showSidePanel)}
              className={`lg:hidden flex justify-center items-center text-white p-1.5 text-3xl rounded-lg ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              } `}
            >
              {showSidePanel ? (
                <IoClose />
              ) : (
                <>
                  {" "}
                  {/* <p className="  sm:block lg:hidden"> Menu</p>{" "} */}
                  <RiMenu3Fill />
                </>
              )}
            </button>
          </div>
        </div>
        {isVehicle && (
          <div
            onMouseLeave={() => setIsVehicle(false)}
            onMouseEnter={() => setIsVehicle(true)}
            className=" bg-white w-full"
          >
            <div className="container hidden lg:gap-2 p-2 pb-6 mx-auto bg-white xl:max-w-8xl group xl:flex overflow-x-hidden lg:block xl:overflow-visible  ">
              <div className="flex xl:flex-col gap-2 text-white xl:w-60 justify-center xl:justify-start mb-2">
                {" "}
                <div
                  onClick={() => setSelectedTab(0)}
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 rounded-full  ${
                    selectedTab === 0 && selectedState === "Odisha"
                      ? "text-white bg-primaryBlue"
                      : selectedTab === 0
                      ? "text-white bg-primaryRed"
                      : "text-black bg-secondaryGray3"
                  }`}
                >
                  <p className="w-full text-center"> Arena</p> <FaCaretRight />
                </div>{" "}
                <div
                  onClick={() => setSelectedTab(1)}
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 rounded-full  ${
                    selectedTab === 1 && selectedState === "Odisha"
                      ? "text-white bg-primaryBlue"
                      : selectedTab === 1
                      ? "text-white bg-primaryRed"
                      : "text-black bg-secondaryGray3"
                  }`}
                >
                  <p className="w-full text-center"> Nexa</p> <FaCaretRight />
                </div>
                <div
                  onClick={() => setSelectedTab(2)}
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 rounded-full  ${
                    selectedTab === 2 && selectedState === "Odisha"
                      ? "text-white bg-primaryBlue"
                      : selectedTab === 2
                      ? "text-white bg-primaryRed"
                      : "text-black bg-secondaryGray3"
                  }`}
                >
                  <p className="w-full text-center"> TrueValue</p>{" "}
                  <FaCaretRight />
                </div>
              </div>
              <div
                className={`grid w-full grid-cols-4 text-black  max-h-[70vh] xl:overflow-hidden ${
                  selectedTab === 0 ? "xl:grid-cols-5" : "xl:grid-cols-5"
                } `}
              >
                {selectedTab === 0 &&
                  models.slice(0, 9).map((slide, index) => (
                    <Link
                      onClick={() => setIsVehicle(false)}
                      key={index}
                      href={`${
                        selectedState === "Odisha" ? slide.linkOD : slide.linkCG
                      }`}
                    >
                      <div
                        className={`rounded-xl hover:shadow-lg   cursor-pointer w-[250px] py-8 px-2 flex flex-col gap-1 ${
                          selectedState === "Odisha"
                            ? "hover:bg-primaryBlue"
                            : "hover:bg-primaryRed"
                        }  hover:text-white`}
                      >
                        <img
                          src={slide.thumbnail}
                          alt={slide.subName}
                          loading="lazy"
                          className=" mb-4  h-32 w-auto mx-auto  "
                        />

                        <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                          {slide.subName}
                        </h5>
                      </div>
                    </Link>
                  ))}
                {selectedTab === 1 &&
                  models.slice(9).map((slide, index) => (
                    <Link
                      onClick={() => setIsVehicle(false)}
                      key={index}
                      href={`${
                        selectedState === "Odisha" ? slide.linkOD : slide.linkCG
                      }`}
                    >
                      <div
                        className={`rounded-xl hover:shadow-lg  ${
                          selectedState === "Odisha"
                            ? "hover:bg-primaryBlue"
                            : "hover:bg-primaryRed"
                        } cursor-pointer w-[300px] py-8 px-2 flex flex-col gap-1   hover:text-white`}
                      >
                        <div className="">
                          {" "}
                          <img
                            src={slide.thumbnail}
                            alt={slide.subName}
                            loading="lazy"
                            className=" mb-4 px-2 h-36 w-auto mx-auto "
                          />
                        </div>

                        <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                          {slide.subName}
                        </h5>
                        {/* <p className="text-sm text-center ">
                        {slide.description}
                      </p> */}
                        {/* <button className="px-4 py-2 mx-auto mt-4 text-sm text-white rounded-lg opacity-0 cursor-pointer group-hover:opacity-100 bg-primaryRed w-min whitespace-nowrap">
                Explore Now
              </button> */}
                      </div>
                    </Link>
                  ))}
                {selectedTab === 2 && (
                  <div className=" col-span-4 w-full  gap-1 min-h-24 pb-2 pl-4 flex xl:flex-col justify-center xl:justify-start items-center xl:items-start">
                    {/* <button
                    aria-label="Buy A Car Now"
                    className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 xl:w-full max-w-md ${
                      selectedState === "Odisha"
                        ? "hover:text-white hover:bg-primaryBlue text-primaryBlue border border-primaryBlue  "
                        : "hover:text-white hover:bg-primaryRed text-primaryRed border border-primaryRed"
                    }`}
                  >
                    <Link
                      className="flex gap-2 w-full items-center justify-between"
                      href="/truevalue/buy-a-car"
                    >
                      {" "}
                      Buy A Car Now <FaCaretRight />
                    </Link>
                  </button> */}
                    <button
                      aria-label="Buy Your Car Now"
                      className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer min-w-28 rounded-full xl:w-full max-w-md ${
                        selectedState === "Odisha"
                          ? "hover:text-white hover:bg-primaryBlue text-primaryBlue border border-primaryBlue  "
                          : "hover:text-white hover:bg-primaryRed text-primaryRed border border-primaryRed"
                      }`}
                    >
                      <Link
                        className="flex gap-2 w-full items-center justify-between"
                        href="/truevalue/sell-a-car"
                      >
                        {" "}
                        Sell Your Car Now <FaCaretRight />
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <ModalSidePannel showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel} />
    </header>
  );
};

export default Header;
