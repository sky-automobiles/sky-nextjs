"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  address: string;
  serviceType: string;
  isPickup: string;
  serviceDate: string;
}

const BookAService: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "",
    city: "",
    address: "",
    serviceType: "",
    isPickup: "",
    serviceDate: "",
  });
  const dateInputRef = useRef<HTMLInputElement>(null);

  const { selectedState } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Set the min attribute of the date input
    if (dateInputRef.current) {
      dateInputRef.current.min = today;
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    console.log("Form Data:", { ...formData, state: selectedState });
    try {
      // Send the POST request
      const response = await fetch("/api/service", {
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
        //  window.location.href = "/thank-you";
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

    // Uncomment if you want to reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
      city: "",
      address: "",
      serviceType: "",
      isPickup: "",
      serviceDate: "",
    });
  };

  // const handleFocus = () => {
  //   // Ensure that this function is only used if necessary
  //   if (dateInputRef.current) {
  //     dateInputRef.current.showPicker();
  //   }
  // };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className=" min-h-40 bg-primaryGray   ">
          <Image
            height={1080}
            width={1920}
            src="/images/other/service_banner.webp"
            alt="Sky Automobiles Service Banner"
            className="object-cover w-full h-full  max-h-[50vh] hidden sm:block"
          />
          <Image
            height={1920}
            width={500}
            src="/images/other/service_mobile.webp"
            alt="Sky Automobiles Service Banner"
            className="object-cover w-full h-full  min-h-[50vh]  sm:hidden"
          />
        </div>

        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Book a{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Service{" "}
            </span>{" "}
            Now
          </h4>
          <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white">
            <div className="w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                pattern="[A-Za-z0-9-._, ]{3,50}"
                minLength={3}
                maxLength={50}
                title="Only alphabets, spaces, hyphens, and apostrophes are allowed"
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
                pattern="^[0-9]+$"
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
                placeholder="Email*"
                minLength={3}
                required
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
              <input
                type="text"
                name="address"
                placeholder="Address*"
                required
                minLength={3}
                maxLength={50}
                title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                required
                pattern="[A-Za-z0-9-._, ]{3,50}"
                minLength={3}
                maxLength={50}
                title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.city}
                onChange={handleChange}
              />
              <select
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Model*
                </option>
                <optgroup label="Arena" className="text-sm text-primaryGray">
                  <option value="Alto k10">Alto K10</option>
                  <option value="Wagon R">Wagon R</option>
                  <option value="Celerio">Celerio</option>
                  <option value="Epic swift 2024">Epic Swift 2024</option>
                  <option value="Swift">Swift</option>
                  <option value="Dzire">Dzire</option>
                  <option value="S-presso">S-Presso</option>
                  <option value="Ertiga">Ertiga</option>
                  <option value="Brezza">Brezza</option>
                  <option value="Eeco">Eeco</option>
                </optgroup>
                <optgroup label="Nexa" className="text-sm text-primaryGray">
                  <option value="Invicto">Invicto</option>
                  <option value="Fronx">Fronx</option>
                  <option value="Jimny">Jimny</option>
                  <option value="Grand Vitara">Grand Vitara</option>
                  <option value="Ciaz">Ciaz</option>
                  <option value="Baleno">Baleno</option>
                  <option value="Ignis">Ignis</option>
                  <option value="XL6">XL6</option>
                  <option value="Other">Other</option>
                </optgroup>
              </select>
              <select
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Service*
                </option>
                <option value="Free Service">Free Service</option>
                <option value="Paid Service">Paid Service</option>
                <option value="Others">Others</option>
              </select>
              <div className="relative">
                <input
                  type="date"
                  name="serviceDate"
                  id="serviceDate"
                  // ref={dateInputRef}
                  required
                  className={`w-full min-h-11 p-2 bg-transparent border-b-2  focus:outline-none rounded-none  select-none ${
                    selectedState === "Odisha"
                      ? "border-b-primaryBlue"
                      : "border-b-primaryRed"
                  } ${
                    formData.serviceDate ? "text-black" : "  text-transparent"
                  }`}
                  value={formData.serviceDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Date*"
                  // onFocus={handleFocus}
                />
                <label
                  htmlFor="serviceDate"
                  className={`absolute top-0 left-0 p-2 transition-all duration-300 ease-in-out w-[70%]  ${
                    formData.serviceDate ? "text-transparent" : "  "
                  }`}
                >
                  Service date
                </label>
              </div>
              <div className="w-full p-2 flex justify-between items-end">
                <p>Pick Up Required:</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isPickup"
                    value="Yes"
                    required
                    checked={formData.isPickup === "Yes"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4 cursor-pointer">
                  <input
                    type="radio"
                    name="isPickup"
                    value="No"
                    required
                    checked={formData.isPickup === "No"}
                    onChange={handleChange}
                    className="form-radio "
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg  whitespace-nowrap mt-6 min-w-40 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Submitting
                </div>
              ) : (
                "Book Now"
              )}
            </button>
            <p className="mt-4 text-[10px] text-gray-500">
              *Disclaimer: I agree that by clicking the &apos;Book Now&apos;
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

export default BookAService;
