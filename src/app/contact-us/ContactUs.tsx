"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaSpinner } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  subject: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  });
  const { selectedState } = useAppContext();
    const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    const [loading,setLoading]= useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    console.log("Form Data:", { ...formData, state: selectedState });
    try {
      // Send the POST request
      const response = await fetch("/api/contactUs", {
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
      router.push("/thank-you");
         
      } else {
        toast.error("Failed to send request. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again later.");
      console.error("Error sending request:", error);
    }finally{
      setLoading(false);
    }
    // Uncomment if you want to reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className=" min-h-40 bg-primaryGray   ">
        {/* <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl">
            Required Banner Image
          </div> */}
        <Image
          height={1080}
          width={1920}
          src="/images/other/contact us banner.webp"
          alt="Sky Automobile Career Banner"
          className="object-cover w-full h-full  max-h-[50vh] hidden sm:block"
        />
        <Image
          height={1920}
          width={500}
          src="/images/other/contact us mobile.webp"
          alt="Sky Automobile Career Banner"
          className="object-cover w-full h-full  min-h-[50vh]  sm:hidden"
        />
      </div>
      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
        <div className="mb-12 lg:mb-20 text-lg">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 ">
            <span
              className={`${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Contact{" "}
            </span>{" "}
            Us
          </h4>
          <div className="grid lg:grid-cols-3 gap-4">
            <form
              onSubmit={handleSubmit}
              id="myForm"
              className="py-3 bg-white lg:col-span-2"
            >
              <div className="w-full gap-4 grid sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  pattern="[A-Za-z ]{3,32}"
                  minLength={3}
                  maxLength={50}
                  title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
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
                  title="Only 10-digit Indian numbers are allowed"
                  pattern="^[0-9]{10}$"
                  className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                    selectedState === "Odisha"
                      ? "border-b-primaryBlue"
                      : "border-b-primaryRed"
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  minLength={3}
                  title="Please enter a valid email address"
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                  className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                    selectedState === "Odisha"
                      ? "border-b-primaryBlue"
                      : "border-b-primaryRed"
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                <select
                  className={`w-full p-2 bg-transparent border-b-2   focus:outline-none rounded-none ${
                    selectedState === "Odisha"
                      ? "border-b-primaryBlue"
                      : "border-b-primaryRed"
                  }`}
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Subject*
                  </option>
                  <option value="Car Enquiry">Car Enquiry</option>
                  <option value="Service Booking">Service Booking</option>
                  <option value="Complaints/Queries">Complaints/Queries</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Others">Others</option>
                </select>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  title="Maximum 500 characters allowed"
                  placeholder="Message (Optional)"
                  className={`w-full p-2 bg-transparent border-b-2  focus:outline-none max-h-32 min-h-20 sm:col-span-2 ${
                    selectedState === "Odisha"
                      ? "border-b-primaryBlue"
                      : "border-b-primaryRed"
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4   whitespace-nowrap mt-6 min-w-40 hover:shadow-xl  ${
                  selectedState === "Odisha"
                    ? "bg-primaryBlue"
                    : "bg-primaryRed"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" /> Submitting
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
              <p className="mt-6 text-xs text-gray-500">
                *Disclaimer: By clicking &apos;Submit&apos;, you have agreed to
                our Terms and Conditions.
              </p>
            </form>
            <div className="lg:p-4 rounded-lg flex flex-col gap-2 lg:gap-4">
              <div className="flex items-center px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <FaPhoneAlt
                  className={`text-5xl  p-3 ${
                    selectedState === "Odisha"
                      ? " text-primaryBlue"
                      : "text-primaryRed"
                  } `}
                />
                <div>
                  <p
                    className={`font-medium  ${
                      selectedState === "Odisha"
                        ? "text-primaryBlue"
                        : "text-primaryRed"
                    }`}
                  >
                    Sales:
                  </p>
                  <a
                    href="tel:+91 1234567890"
                    className="text-lg "
                    aria-label="Call"
                  >
                    +91 1234567890
                  </a>
                </div>
              </div>
              <div className="flex items-center px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <FaPhoneAlt
                  className={`text-5xl  p-3 ${
                    selectedState === "Odisha"
                      ? " text-primaryBlue"
                      : "text-primaryRed"
                  } `}
                />
                <div>
                  <p
                    className={`font-medium   ${
                      selectedState === "Odisha"
                        ? "text-primaryBlue"
                        : "text-primaryRed"
                    }`}
                  >
                    Service:
                  </p>
                  <a
                    href="tel:+91 1234567890"
                    className="text-lg"
                    aria-label="Call"
                  >
                    +91 1234567890
                  </a>
                </div>
              </div>
              <div className="flex items-center px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <MdOutlineMailOutline
                  className={`text-5xl  p-3 ${
                    selectedState === "Odisha"
                      ? " text-primaryBlue"
                      : "text-primaryRed"
                  } `}
                />
                <div>
                  <p
                    className={`font-medium  ${
                      selectedState === "Odisha"
                        ? "text-primaryBlue"
                        : "text-primaryRed"
                    }`}
                  >
                    Email:
                  </p>
                  <a
                    href="mailto:xyz@xyz.xyz"
                    className="text-lg "
                    aria-label="Email"
                  >
                    xyz@xyz.xyz
                  </a>
                </div>
              </div>
              <div className="flex items-start px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <div className="min-w-12">
                  <FaMapMarkerAlt
                    className={`text-5xl  p-3 ${
                      selectedState === "Odisha"
                        ? " text-primaryBlue"
                        : "text-primaryRed"
                    } `}
                  />
                </div>
                <div className="overflow-hidden">
                  <p
                    className={`font-medium  ${
                      selectedState === "Odisha"
                        ? "text-primaryBlue"
                        : "text-primaryRed"
                    }`}
                  >
                    Head Office:
                  </p>
                  <a
                    href="mailto:xyz@xyz.xyz"
                    className="text-base"
                    aria-label="Email"
                  >
                    NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha
                    760010
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
