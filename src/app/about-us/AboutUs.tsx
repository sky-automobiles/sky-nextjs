"use client";
import { useAppContext } from "@/context";
import React from "react";

const AboutUs = () => {
  const { selectedState } = useAppContext();

  return (
    <div>
      <div className=" min-h-40 bg-primaryGray  ">
        <img
          src="/images/other/banner automobile.jpg"
          alt=""
          className="w-full object-cover max-h-[80vh]  object-bottom"
        />
        {/* <div className="h-full min-h-[40vh] flex justify-center items-center text-gray-400 text-3xl ">
          Required Banner Image
        </div> */}
      </div>
      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
        <div className="mb-12 lg:mb-20 text-lg ">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 ">
            About{" "}
            <span
              className={` ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Us{" "}
            </span>
          </h4>
          <p>
            Established in 1987,{" "}
            <span
              className={`  font-medium ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Sky Automobiles
            </span>{" "}
            is the oldest Maruti Suzuki dealership in Central India, with over
            three decades of experience in the automotive industry. Our
            dealership is proud to be ISO-certified, a testament to our
            commitment to quality and excellence in both sales and service.
          </p>
          <br />
          <p>
            With 40+ touchpoints across Chhattisgarh and Odisha,{" "}
            <span
              className={`  font-medium ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Sky Automobiles
            </span>{" "}
            is well-positioned to serve the diverse needs of customers, whether
            it’s through our ARENA and NEXA channels for new cars or our True
            Value division for certified pre-owned vehicles.
          </p>
          <br />
          <p>
            We take pride in delivering exceptional after-sales service through
            our advanced workshops and body shops, ensuring that your vehicle
            remains in optimal condition. Our dedicated team also assists with
            insurance renewals, offering comprehensive protection and peace of
            mind for your car.
          </p>
          <br />
          <p>
            At Sky Automobiles, we strive for excellence in everything we do,
            providing a customer-first experience that focuses on transparency,
            quality, and satisfaction.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
