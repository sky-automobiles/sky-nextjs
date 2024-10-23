"use client"; // Add this at the top of your file
import { useAppContext } from "@/context";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

const EnqHome: React.FC = () => {
  // Define the type for the form data
  interface FormData {
    name: string;
    phone: string;
    email: string;
    lookingFor: string;
  }

  const { selectedState } = useAppContext();
  const router = useRouter()
  // Initialize form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    lookingFor: "",
  });

  // Handle form input changes
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    console.log("Form Data:", { ...formData, state: selectedState });

    // toast.success("Thank You for contacting us. We will get back to you soon!");
    try {
      // Send the POST request
      const response = await fetch("/api/home", {
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

    // Reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
     lookingFor: "",
    
    });
  };

  return (
    <div className="text-white bg-primaryGray">
      <div className="container px-4 py-10 mx-auto xl:max-w-7xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2  lg:grid-cols-9">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              pattern="^[a-zA-Z]+$"
              minLength={3}
              maxLength={50}
              title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
              className={`w-full p-2 bg-transparent  border-b-2  focus:outline-none placeholder:text-white lg:col-span-2 ${
                selectedState === "Odisha"
                  ? "border-b-white "
                  : "border-b-primaryRed "
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
              title="Only 10 digit Indian numbers are allowed"
              pattern="^[0-9]+$"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none placeholder:text-white lg:col-span-2 ${
                selectedState === "Odisha"
                  ? "border-b-white"
                  : "border-b-primaryRed"
              }`}
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              // title="Only 10 digit Indian numbers are allowed"
              // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none placeholder:text-white lg:col-span-2 ${
                selectedState === "Odisha"
                  ? "border-b-white"
                  : "border-b-primaryRed"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="lookingFor"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none placeholder:text-white lg:col-span-2 ${
                selectedState === "Odisha"
                  ? "border-b-white"
                  : "border-b-primaryRed"
              }`}
              required
              value={formData.lookingFor}
              onChange={handleChange}
            >
              <option
                value=""
                className="w-full p-2 text-sm text-black border rounded-md"
                disabled
              >
                I&apos;m looking for*
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
              </optgroup>
              <optgroup label="True Value" className="text-sm text-primaryGray">
                <option value="I want to buy">I want to buy</option>
                <option value="I want to sell">I want to sell</option>
              </optgroup>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`hidden px-2 py-2 mx-auto text-sm duration-500 bg-transparent border rounded-md md:text-sm md:px-4 hover:shadow-lg  w-min whitespace-nowrap lg:block ${
                selectedState === "Odisha"
                  ? " hover:bg-primaryBlue"
                  : "hover:border-primaryRed hover:bg-primaryRed"
              } `}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Submitting
                </div>
              ) : (
                "Enquire Now"
              )}
            </button>
          </div>
          <div className="flex justify-center py-2 mt-4 lg:hidden">
            <button
              type="submit"
              disabled={loading}
              className={`px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:text-base md:px-4 hover:shadow-lg  ${
                selectedState === "Odisha"
                  ? " hover:bg-primaryBlue"
                  : "hover:border-primaryRed hover:bg-primaryRed"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnqHome;
