"use client";
import { models } from "@/constants";
import { useAppContext } from "@/context";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

interface ModalSidePannelProps {
  showSidePanel?: boolean;
  setShowSidePanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSidePannel = ({
  setShowSidePanel,
  showSidePanel,
}: ModalSidePannelProps) => {
  const { selectedState } = useAppContext();
  const [openShowVehicle, setOpenShowVehicle] = React.useState(0);

  React.useEffect(() => {
    if (showSidePanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    if (!showSidePanel) {
      setOpenShowVehicle(0);
    }
  }, [showSidePanel]);

  return (
    <div
      className={`fixed top-16  right-0 w-full h-full bg-white  z-50 min-h-[calc(100vh-50px)] lg:hidden max-w-md px-2 overflow-scroll border-l  max-h-[200vh] ${
        selectedState === "Odisha" ? "text-primaryBlue" : "text-primaryRed"
      } ${
        showSidePanel ? "translate-x-0 " : "translate-x-full"
      } duration-500 py-6`}
    >
      <div>
        {/* <input
          type="search"
          name=""
          id=""
          className="border-2  w-full h-9 rounded-lg mb-4"
        /> */}
        <div className={`flex flex-col    text-lg`}>
          <div
            onClick={() => setShowSidePanel(false)}
            className={`min-h-12 flex items-center border-b  px-4 hover:rounded-lg hover:text-white  font-medium ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue "
                : "hover:bg-primaryRed "
            }}`}
          >
            {" "}
            <Link href={"/"}>Home</Link>
          </div>
          <div
            onClick={() =>
              openShowVehicle !== 1
                ? setOpenShowVehicle(1)
                : setOpenShowVehicle(0)
            }
            className={`min-h-12 flex items-center border-b  px-4 hover:rounded-lg justify-between hover:text-white ${
              selectedState === "Odisha"
                ? "hover:bg-primaryBlue "
                : "hover:bg-primaryRed "
            }   `}
          >
            Vehicles{" "}
            <FaCaretRight
              className={`duration-500 ${
                openShowVehicle > 0 && openShowVehicle < 5
                  ? "-rotate-90"
                  : "rotate-90"
              }`}
            />
          </div>
          {openShowVehicle < 5 && (
            <button
              onClick={() => {
                openShowVehicle !== 2
                  ? setOpenShowVehicle(2)
                  : setOpenShowVehicle(0);
              }}
              aria-label="Show Arena Vehicles"
              className={`min-h-12 flex items-center border-b  pl-6 hover:rounded-lg hover:text-white font-normal gap-2 ${
                selectedState === "Odisha"
                  ? "hover:bg-primaryBlue "
                  : "hover:bg-primaryRed "
              }}`}
            >
              <FaCaretRight
                className={`duration-500 ${
                  openShowVehicle === 2 ? "rotate-90" : "rotate-0"
                }`}
              />{" "}
              Arena
            </button>
          )}
          {openShowVehicle === 2 && (
            <div className="grid grid-cols-2 mt-2  pl-6 mb-4 sm:grid-cols-3 bg-gray-50 rounded-lg">
              {models.slice(0, 9).map((slide, index) => (
                <Link
                  // onClick={() => setIsVehicle(false)}
                  onClick={() => setShowSidePanel(false)}
                  key={index}
                  href={
                    selectedState === "Odisha" ? slide.linkOD : slide.linkCG
                  }
                >
                  <div
                    className={`rounded-xl hover:shadow-lg   cursor-pointer  p-2 flex flex-col gap-1 ${
                      selectedState === "Odisha"
                        ? "hover:bg-primaryBlue"
                        : "hover:bg-primaryRed"
                    }  hover:text-white`}
                  >
                    <img
                      src={slide.thumbnail}
                      alt={slide.subName}
                      loading="lazy"
                      className=" mb-2   w-auto mx-auto  "
                    />

                    <h5 className=" text-center  text-sm  ">{slide.subName}</h5>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {openShowVehicle < 5 && (
            <button
              onClick={() =>
                openShowVehicle !== 3
                  ? setOpenShowVehicle(3)
                  : setOpenShowVehicle(0)
              }
              className={`min-h-12 flex items-center border-b  pl-6 hover:rounded-lg hover:text-white font-normal gap-2 ${
                selectedState === "Odisha"
                  ? "hover:bg-primaryBlue "
                  : "hover:bg-primaryRed "
              }}`}
            >
              <FaCaretRight
                className={`duration-500 ${
                  openShowVehicle === 3 ? "rotate-90" : "rotate-0"
                }`}
              />{" "}
              Nexa
            </button>
          )}
          {openShowVehicle === 3 && (
            <div className="grid grid-cols-2 mt-2   pl-6 mb-4 sm:grid-cols-3 bg-gray-50 rounded-lg">
              {models.slice(9).map((slide, index) => (
                <Link
                  onClick={() => setShowSidePanel(false)}
                  key={index}
                  href={
                    selectedState === "Odisha" ? slide.linkOD : slide.linkCG
                  }
                >
                  <div
                    className={`rounded-xl hover:shadow-lg   cursor-pointer  p-2 flex flex-col gap-1 ${
                      selectedState === "Odisha"
                        ? "hover:bg-primaryBlue"
                        : "hover:bg-primaryRed"
                    }  hover:text-white`}
                  >
                    <img
                      src={slide.thumbnail}
                      alt={slide.subName}
                      loading="lazy"
                      className=" mb-2   w-auto mx-auto  "
                    />

                    <h5 className=" text-center  text-sm  ">{slide.subName}</h5>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {openShowVehicle < 5 && (
            <button
              onClick={() =>
                openShowVehicle !== 4
                  ? setOpenShowVehicle(4)
                  : setOpenShowVehicle(0)
              }
              className={`min-h-12 flex items-center border-b  pl-6 hover:rounded-lg hover:text-white font-normal gap-2 ${
                selectedState === "Odisha"
                  ? "hover:bg-primaryBlue "
                  : "hover:bg-primaryRed "
              }}`}
            >
              <FaCaretRight
                className={`duration-500 ${
                  openShowVehicle === 4 ? "rotate-90" : "rotate-0"
                }`}
              />{" "}
              True Value
            </button>
          )}
          {openShowVehicle === 4 && (
            <div className="bg-gray-100 rounded-lg mb-1 ">
              {/* <Link href="/truevalue/buy-a-car">
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2 border-b  text-sm "
                >
                  Buy a Vehicle
                </div>
              </Link> */}
              <Link href="/truevalue/sell-a-car">
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2  "
                >
                  Sell your Car
                </div>
              </Link>
            </div>
          )}
          <div
            onClick={() =>
              openShowVehicle !== 5
                ? setOpenShowVehicle(5)
                : setOpenShowVehicle(0)
            }
            className={`min-h-12 flex items-center border-b  px-4  justify-between  ${
              openShowVehicle === 5 ? "rounded-t-lg mt-1" : "hover:rounded-lg"
            } ${
              selectedState === "Odisha" && openShowVehicle === 5
                ? "bg-primaryBlue text-white "
                : selectedState !== "Odisha" && openShowVehicle === 5
                ? "bg-primaryRed text-white "
                : "bg-white "
            }`}
          >
            Services{" "}
            <FaCaretRight
              className={`duration-500 ${
                openShowVehicle === 5 ? "-rotate-90" : "rotate-90"
              }`}
            />
          </div>
          {openShowVehicle > 4 && openShowVehicle < 6 && (
            <div className="bg-gray-100 rounded-b-lg mb-1">
              <Link href={"/services/book-a-service"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2 border-b   "
                >
                  Book A Service
                </div>
              </Link>
              <Link href={"/services/finance"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2 border-b "
                >
                  Finance
                </div>
              </Link>
              <Link href={"/services/insurance"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2 "
                >
                  Insurance
                </div>
              </Link>
            </div>
          )}
          <Link
            href={`${
              selectedState === "Odisha"
                ? "/outlets/odisha-outlets"
                : "/outlets/chhattisgarh-outlets"
            }`}
            className={`min-h-12 flex items-center border-b  px-4 justify-between     `}
          >
            Outlets{" "}
          </Link>
          {/* {openShowVehicle > 5 && openShowVehicle < 7 && (
            <div className="bg-gray-100 rounded-b-lg mb-1">
              <div
                onClick={() => setShowSidePanel(false)}
                className="  min-h-8 pl-12 py-2 border-b   "
              >
                <Link href={"/outlets/chhattisgarh-outlets"}>Chhattisgarh</Link>
              </div>
              <Link href={"/outlets/odisha-outlets"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2    "
                >
                  Odisha
                </div>
              </Link>
            </div>
          )} */}
          <div
            onClick={() =>
              openShowVehicle !== 7
                ? setOpenShowVehicle(7)
                : setOpenShowVehicle(0)
            }
            className={`min-h-12 flex items-center border-b justify-between  px-4 ${
              openShowVehicle === 7 ? "rounded-t-lg mt-1" : "hover:rounded-lg"
            }   ${
              selectedState === "Odisha" && openShowVehicle === 7
                ? "bg-primaryBlue text-white "
                : selectedState !== "Odisha" && openShowVehicle === 7
                ? "bg-primaryRed text-white "
                : "bg-white "
            }   `}
          >
            More{" "}
            <FaCaretRight
              className={`duration-500 ${
                openShowVehicle === 7 ? "-rotate-90" : "rotate-90"
              }`}
            />{" "}
          </div>
          {openShowVehicle > 6 && openShowVehicle < 8 && (
            <div className="bg-gray-100 rounded-b-lg mb-1">
              <Link href={"/about-us"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2 border-b   "
                >
                  About Us
                </div>
              </Link>
              <Link href={"/contact-us"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2 border-b "
                >
                  Contact Us
                </div>
              </Link>
              <Link href={"/blogs"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className=" min-h-8 pl-12 py-2 border-b   "
                >
                  Blogs
                </div>
              </Link>
              <Link href={"/career"}>
                {" "}
                <div
                  onClick={() => setShowSidePanel(false)}
                  className="  min-h-8 pl-12 py-2    "
                >
                  Career
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSidePannel;
