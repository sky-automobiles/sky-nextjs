"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

// Define the type for the career form data
interface CareerFormData {
  name: string;
  email: string;
  designation: string;

  phone: string;
  experience: string;
}

const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState<CareerFormData>({
    name: "",
    email: "",
    designation: "",

    phone: "",
    experience: "",
  });
  const { selectedState } = useAppContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    console.log("Career Form Data:", formData);
    try {
      // Send the POST request
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, state: selectedState }),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Handle the response based on the data
      if (data.status === true) {
        toast.success(
          "Thank you for contacting us. We will get back to you soon!"
        );
        // window.location.href = "/thank-you";
        router.push("/thank-you");
      } else {
        toast.error("Failed to send request. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again later.");
      console.error("Error sending request:", error);
    } finally {
      setLoading(false);
    }

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      designation: "",
      phone: "",
      experience: "",
    });
  };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className=" min-h-40 bg-primaryGray   ">
          {/* <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl">
            Required Banner Image
          </div> */}
          <Image
            height={1080}
            width={1920}
            src="/images/other/sky-career-banner.webp"
            alt="Sky Automobile Career Banner"
            className="object-cover w-full h-full  max-h-[50vh] hidden sm:block"
          />
          <Image
           height={1920}
            width={500}
            src="/images/other/sky-career-mobile.webp"
            alt="Sky Automobile Career Banner"
            className="object-cover w-full h-full  min-h-[50vh]  sm:hidden"
          />
        </div>
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Apply for a{" "}
            <span
              className={`${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              {" "}
              {formData.designation && (
                <span className=""> {formData.designation} </span>
              )}
            </span>
            Position
          </h4>
          <form
            onSubmit={handleSubmit}
            id="careerForm"
            className="py-3 bg-white"
          >
            <div className="w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                minLength={3}
                maxLength={50}
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                minLength={10}
                maxLength={10}
                pattern="^[0-9]{10}$"
                title="Please enter a valid 10-digit phone number"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.phone}
                onChange={handleChange}
              />{" "}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation*"
                required
                minLength={3}
                maxLength={50}
                pattern="^[a-zA-Z\s]+$"
                title="Please enter a valid designation"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.designation}
                onChange={handleChange}
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience*"
                required
                minLength={3}
                maxLength={30}
                // pattern="^\d+\s*(years?|months?)$"
                // title="Please enter a valid experience in the format 'X years' or 'X months'"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.experience}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2   text-white duration-500 border-b-2   md:px-4 hover:shadow-lg  whitespace-nowrap ${
                  selectedState === "Odisha"
                    ? "bg-primaryBlue border-primaryBlue"
                    : "bg-primaryRed border-primaryRed"
                } `}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" /> Submitting
                  </div>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>

            <p className="mt-4 text-[10px] text-gray-500">
              *Disclaimer: I agree that by clicking the &apos;Apply Now&apos;
              button below, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
