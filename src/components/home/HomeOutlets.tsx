"use client";
import { useAppContext } from "@/context";
import React from "react";

const HomeOutlets = () => {
  const { selectedState } = useAppContext();
  return (
    <div className="container py-10 mx-auto xl:max-w-6xl lg:pt-20 px-1">
      <h4 className="mb-6 text-3xl font-bold text-center text-primaryGray lg:mb-10">
        Our Outlets
      </h4>
      {selectedState === "Odisha" ? (
        <div className="grid md:grid-cols-3 gap-2 md:gap-4">
          <div className=" rounded-xl  group relative overflow-hidden  bg-secondaryGray3">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9206376940115!2d85.82146437603774!3d20.34489698113881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909dd9bca2089%3A0xa54f9d01703c8849!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Bhubaneswar%2C%20Patia)!5e0!3m2!1sen!2sin!4v1727083042435!5m2!1sen!2sin"
                width="100%"
                height="240"
                allowFullScreen
                aria-hidden="false"
                loading="lazy"
                title=" Arena Patia - Bhubhneshwar"
                className="rounded-xl"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/7kujYmyGs5NnRUys6"
              target="_blank"
              rel="noreferrer"
              className={`w-full  absolute -bottom-16 left-0 z-10 text-white bg-primaryBlue py-3 group-hover:bottom-0 duration-500 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              <div className=" text-center ">
                {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
                <h5 className=" text-lg  ">
                  Arena Patia - Bhubhneshwar &#8599;
                </h5>
              </div>
            </a>
          </div>
          <div className=" rounded-xl    group relative overflow-hidden  bg-secondaryGray3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5645908400693!2d85.87805527603712!3d20.31828188115911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c4e7c351c5%3A0xc70e6896ae439b35!2sNEXA%20(Sky%20Automobiles%2C%20Bhubaneshwar%2C%20Twin%20City)!5e0!3m2!1sen!2sin!4v1727091501886!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen
              aria-hidden="false"
              loading="lazy"
              title="Nexa - Bhubhneshwar"
              className="rounded-xl"
            />{" "}
            <a
              href="https://maps.app.goo.gl/74tEX5Gj7Lx4Y12D9"
              target="_blank"
              rel="noreferrer"
              className={`w-full  absolute -bottom-16 left-0 z-10 text-white bg-primaryBlue py-3 group-hover:bottom-0 duration-500 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              <div className=" text-center ">
                {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
                <h5 className="  text-lg  "> Nexa - Bhubhneshwar &#8599;</h5>
              </div>
            </a>
          </div>
          <div className=" rounded-xl    group relative overflow-hidden  bg-secondaryGray3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.245914054893!2d84.85389107601618!3d19.315132481939383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1728035521580!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen
              aria-hidden="false"
              loading="lazy"
              title="Arena Behrampur"
              className="rounded-xl"
            />{" "}
            <a
              href="https://maps.app.goo.gl/bU3rxP3DMBuuamm19"
              target="_blank"
              rel="noreferrer"
              className={`w-full  absolute -bottom-16 left-0 z-10 text-white bg-primaryBlue py-3 group-hover:bottom-0 duration-500 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              <div className=" text-center ">
                {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
                <h5 className="  text-lg  "> Arena Behrampur &#8599;</h5>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-2 md:gap-4">
          <div className=" rounded-xl    group relative overflow-hidden  bg-secondaryGray3">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14873.575748626132!2d81.5938016!3d21.2558686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0522595e83%3A0x9b53881314481416!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Mohaba%20Bazar)!5e0!3m2!1sen!2sin!4v1726030050436!5m2!1sen!2sin"
                width="100%"
                height="240"
                allowFullScreen
                aria-hidden="false"
                loading="lazy"
                title="Arena Mohoba Bazar"
                className="rounded-xl"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/jBXrQK86hU4sDmDk8"
              target="_blank"
              rel="noreferrer"
              className={`w-full  absolute -bottom-16 left-0 z-10 text-white bg-primaryBlue py-3 group-hover:bottom-0 duration-500 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              <div className=" text-center ">
                {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
                <h5 className=" text-lg  ">Arena Mohoba Bazar &#8599;</h5>
              </div>
            </a>
          </div>
          <div className=" rounded-xl    group relative overflow-hidden  bg-secondaryGray3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.817684755998!2d81.98698901098479!3d19.071751852031007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3013ae37b5a953%3A0x5bb8be0455abd258!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Jagdalpur%2C%20Geedam%20Road)!5e0!3m2!1sen!2sin!4v1726032668769!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen
              aria-hidden="false"
              loading="lazy"
              title="Arena Jagdalpur"
              className="rounded-xl"
            />{" "}
            <a
              href="https://maps.app.goo.gl/uJ9uULnbxpT9kKbUA"
              target="_blank"
              rel="noreferrer"
              className={`w-full  absolute -bottom-16 left-0 z-10 text-white bg-primaryBlue py-3 group-hover:bottom-0 duration-500 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              <div className=" text-center ">
                {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
                <h5 className="  text-lg  "> Arena Jagdalpur &#8599;</h5>
              </div>
            </a>
          </div>
          <div className=" rounded-xl  group relative overflow-hidden   bg-secondaryGray3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.8468887026147!2d82.17568717556416!3d21.63088918017342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28808ee8817f3f%3A0x99a6617344ab4a70!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Baloda%20Bazar%2C%20Raipur%20Road)!5e0!3m2!1sen!2sin!4v1726035214037!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen
              aria-hidden="false"
              loading="lazy"
              title=" Nexa Raipur"
              className="rounded-xl"
            />{" "}
            <a
              href="https://maps.app.goo.gl/TjGXALPwd6JNrg4q6"
              target="_blank"
              rel="noreferrer"
              className={`w-full  absolute -bottom-16 left-0 z-10 text-white bg-primaryBlue py-3 group-hover:bottom-0 duration-500 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              <div className=" text-center ">
                {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
                <h5 className="  text-lg  "> Nexa Raipur &#8599;</h5>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeOutlets;
