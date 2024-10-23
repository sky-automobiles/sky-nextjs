"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { odOutlets } from "@/constants";
import { useAppContext } from "@/context";
import Image from "next/image";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const OdishaOutlets: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const { selectedState } = useAppContext();

  // Convert Set to array to avoid TypeScript iteration issue
  const uniqueChannels = ["All", "Arena", "Nexa", "True Value"];

  // Function to handle filter change
  const handleFilterChange = (channel: string) => {
    setFilter(channel);
  };

  const filteredLocations = odOutlets.flatMap((category) =>
    category.locations.filter((location) => {
      const isChannelMatch = filter === "All" || location.channel === filter;

      return isChannelMatch;
    })
  );
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className=" min-h-40 bg-primaryGray   ">
          <Image
            height={1080}
            width={1920}
            src="/images/other/outlets_banner.webp"
            alt="Sky Automobile Career Banner"
            className="object-cover w-full h-full  max-h-[50vh] hidden sm:block"
          />
          <Image
            height={1920}
            width={500}
            src="/images/other/outlets_mobile.webp"
            alt="Sky Automobile Career Banner"
            className="object-cover w-full h-full  min-h-[50vh]  sm:hidden"
          />
        </div>
        <div className="container py-16 mx-auto xl:max-w-7xl lg:py-20">
          <h4 className="text-3xl font-bold text-primaryGray mb-6 ">
            Odisha{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Outlets{" "}
            </span>{" "}
          </h4>
          <div className="flex gap-4 mb-6 flex-wrap">
            {uniqueChannels.map((channel, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(channel)}
                className={`py-2 px-4 rounded-lg border lg:min-w-28 ${
                  filter === channel && selectedState === "Odisha"
                    ? "bg-primaryBlue text-white"
                    : filter === channel && selectedState === "Chhattisgarh"
                    ? "bg-primaryRed text-white"
                    : selectedState === "Odisha"
                    ? "bg-secondaryGray4 text-primaryBlue"
                    : "bg-secondaryGray4 text-primaryRed"
                }`}
              >
                {channel}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between p-4 duration-300 border rounded-lg shadow-md cursor-default bg-secondaryGray4 group hover:scale-95  hover:text-white ${
                    selectedState === "Odisha"
                      ? "hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  } `}
                >
                  <div>
                    <div className="mb-4 overflow-hidden rounded-lg bg-secondaryGray3">
                      <iframe
                        src={location.iframe}
                        width="100%"
                        height="200"
                        allowFullScreen
                        aria-hidden="false"
                        loading="lazy"
                        title={location.name}
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="lg:px-2">
                      <h2 className="mb-2 text-lg font-semibold">
                        {location.name}
                      </h2>
                      <div className="flex gap-2 pb-3 text-sm">
                        {location.address}
                      </div>
                      <table className="w-full text-sm">
                        <tbody>
                          {location.salesPersonName && (
                            <tr>
                              <td className="font-semibold pr-4">Sale:</td>
                              <td>{location.salesPersonName}</td>
                            </tr>
                          )}
                          {location.phone && (
                            <tr className="border-b">
                              <td className="font-semibold pr-4 pb-2 ">
                                Contact:
                              </td>
                              <td className="pb-2">{location.phone}</td>
                            </tr>
                          )}
                          {location.servicePersonName && (
                            <tr>
                              <td className="font-semibold pr-4 pt-2">
                                Service:
                              </td>
                              <td>{location.servicePersonName}</td>
                            </tr>
                          )}
                          {location.servicePhone && (
                            <tr>
                              <td className="font-semibold pr-4 pb-2">
                                Contact:
                              </td>
                              <td className="pb-2">{location.servicePhone}</td>
                            </tr>
                          )}
                          {/* {location.email && (
                            <tr className="border-t ">
                              <td className="font-semibold pr-4 pt-1">
                                Email:
                              </td>
                              <td className="lowercase pt-1">
                                {location.email}
                              </td>
                            </tr>
                          )}
                           <tr>
                          <td className="font-semibold pr-4">Timing:</td>
                          <td>
                            9:30 AM to 8 PM - Mon to Sat <br />
                            10.00 AM to 5 PM - Sun
                          </td>
                        </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <a
                      href={location.map}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 pt-3 pb-2 text-sm border rounded-lg group-hover:bg-white  ${
                        selectedState === "Odisha"
                          ? "group-hover:text-primaryBlue border-primaryBlue"
                          : "group-hover:text-primaryRed border-primaryRed"
                      } `}
                    >
                      <FaMapMarkerAlt className="text-secondaryRed2" /> View in
                      Google Maps
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No locations match your filters.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OdishaOutlets;
