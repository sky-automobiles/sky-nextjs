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

  city: string;
  address: string;
  // serviceType: string;
  brandName?: string;
  carModel?: string;
  makeYear?: string;
  fuelType?: string;
  ownerShip?: string;
  carVariant?: string;
  kilometerDriven?: string;
  registerCity?: string;
  transmission?: string;
}

const SellCar: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",

    city: "",
    address: "",
    // serviceType: "",
    brandName: "",
    carModel: "",
    makeYear: "",
    fuelType: "",
    ownerShip: "",
    carVariant: "",
    kilometerDriven: "",
    registerCity: "",
    transmission: "",
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
    try {
      // Send the POST request
      const response = await fetch("/api/sell-your-car", {
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
      city: "",
      address: "",
      // serviceType: "",
      brandName: "",
      carModel: "",
      makeYear: "",
      fuelType: "",
      ownerShip: "",
      carVariant: "",
      kilometerDriven: "",
      registerCity: "",
      transmission: "",
    });
  };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className=" min-h-40 bg-primaryGray   ">
          <Image
            height={1080}
            width={1920}
            src="/images/other/sell_car.webp"
            alt="Sky Automobiles Career Banner"
            className="object-cover w-full h-full  max-h-[50vh] hidden sm:block border-b"
          />
          <Image
            height={1920}
            width={500}
            src="/images/other/sell_car_mobile.webp"
            alt="Sky Automobiles Career Banner"
            className="object-cover w-full h-full  min-h-[50vh]  sm:hidden border-b"
          />
        </div>
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Sell Your{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Car{" "}
            </span>{" "}
            Now
          </h4>
          <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white">
            <div className="w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
              <p
                className={`sm:col-span-2 lg:col-span-3   text-lg ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                }`}
              >
                Personal Details
              </p>{" "}
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                pattern="[A-Za-z ]{3,32}"
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
                pattern="[A-Za-z ]{3,32}"
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
              <p
                className={`sm:col-span-2 lg:col-span-3 mt-4  text-lg ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                }`}
              >
                Vehicle Detials:
              </p>
              <select
                className={`w-full p-2 bg-transparent border-b-2  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="brandName"
                required
                value={formData.brandName}
                onChange={handleChange}
              >
                {/* <option value="" disabled>
                  Model*
                </option> */}
                <option value="">Select brand name</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Citroen">Citroen</option>
                <option value="Datsun">Datsun</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Maruti Suzuki">Maruti Suzuki</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="MG Motors">MG Motors</option>
                <option value="Mini">Mini</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Renault">Renault</option>
                <option value="Skoda">Skoda</option>
                <option value="Tata">Tata</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
                <option value="Other">Other</option>
              </select>
              {/* <select
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
              </select> */}
              {/* Additional Fields */}
              <input
                type="text"
                name="carModel"
                required
                placeholder="Enter car model eg. Swift, i20, Nexon, Compass etc. or Don't know"
                value={formData.carModel}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
              />
              <select
                className={`w-full p-2 bg-transparent border-b-2  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                required
                name="makeYear"
                value={formData.makeYear}
                onChange={handleChange}
              >
                <option value="">Select year</option>
                {Array.from({ length: 22 }, (_, i) => 2024 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
                <option value="2002 or older">2002 or older</option>
              </select>
              <select
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="fuelType"
                required
                value={formData.fuelType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Fuel Type
                </option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <select
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="ownerShip"
                required
                value={formData.ownerShip}
                onChange={handleChange}
              >
                <option value="">Select ownership details</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
                <option value="More">More</option>
              </select>
              <input
                type="text"
                name="carVariant"
                placeholder="Enter car variant eg. VDI, VXi etc. or Don't know,"
                required
                value={formData.carVariant}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
              />
              <input
                type="text"
                name="kilometerDriven"
                placeholder="Kilometer Driven"
                value={formData.kilometerDriven}
                required
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
              />
              <input
                type="text"
                name="registerCity"
                placeholder="Register City"
                required
                value={formData.registerCity}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
              />
              <select
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="transmission"
                required
                value={formData.transmission}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Transmission
                </option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg  whitespace-nowrap mt-10 min-w-40 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Submitting
                </div>
              ) : (
                "Enquire Now"
              )}
            </button>
            <p className="mt-4 text-[10px] text-gray-500">
              *Disclaimer: I agree that by clicking the &apos;Submit&apos;
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

export default SellCar;
