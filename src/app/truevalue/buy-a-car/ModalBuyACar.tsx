"use client";
import { useAppContext } from "@/context";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { cgOutlets, odOutlets } from "@/constants";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

interface ModalBuyACarProps {
  showBuyACar: boolean;
  setShowBuyACar: React.Dispatch<React.SetStateAction<boolean>>;
  model?: string;
  carNumber?: string;
}

const ModalBuyACar: React.FC<ModalBuyACarProps> = ({
  showBuyACar,
  setShowBuyACar,
  model,
  carNumber,
}) => {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container") setShowBuyACar(false);
  };
  interface FormData {
    name: string;
    phone: string;
    // model: string;
    email: string;
    outlet: string;
  }

  useEffect(() => {
    // Prevent scrolling when the modal is open
    document.body.style.overflow = showBuyACar ? "hidden" : "auto";

    // Clean up the effect when the component is unmounted or the state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBuyACar]);
  const { selectedState } = useAppContext();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    // model: model || "",
    email: "",
    outlet: "",
  });
    const router = useRouter();

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
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    setLoading(true);
    event.preventDefault();
    console.log("Form Data:", {
      ...formData,
      state: selectedState,
      model,
      carNumber,
    });
    try {
      // Send the POST request
      const response = await fetch("/api/buy-a-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          state: selectedState,
          model,
          carNumber,
        }),
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
    // Optionally, reset form state after submission
    setFormData({
      name: "",
      phone: "",
      // model: "",
      email: "",
      outlet: "",
    });
    setShowBuyACar(false);
  };

  if (!showBuyACar) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-[3px] overflow-hidden bg-black bg-opacity-50"
    >
      <div className="bg-white w-full max-w-md rounded py-6 m-2 md:py-6 select-none px-4 ">
        <h4 className=" text-xl font-semibold  text-primaryGray mb-4">
          Get A Call Back for{" "}
          <span
            className={`text-sm ${
              selectedState === "Odisha"
                ? "text-primaryBlue"
                : "text-primaryRed"
            }`}
          >
            - {model}
          </span>{" "}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              pattern="^[a-zA-Z]+$"
              minLength={3}
              maxLength={50}
              title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
              className={`w-full p-2 bg-transparent  border-b-2  focus:outline-none  ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue "
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
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none  ${
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
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none  ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="outlet"
              className={`w-full p-2 bg-transparent border-b-2   focus:outline-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : " border-b-primaryRed"
              }`}
              onChange={handleChange}
              required
              defaultValue={""}
            >
              <option value="" disabled>
                Select Outlet
              </option>
              {selectedState !== "Odisha"
                ? cgOutlets[3].locations.map((outlet, i) => (
                    <option key={i} value={outlet.name}>
                      {outlet.name}
                    </option>
                  ))
                : odOutlets[2]?.locations.map((outlet, i) => (
                    <option key={i} value={outlet.name}>
                      {outlet.name}
                    </option>
                  ))}
            </select>
            {/* <input
              type="model"
              name="model"
              placeholder="Model"
              disabled
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none cursor-not-allowed text-gray-400 text-sm ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={model}
            /> */}

            <button
              type="submit"
              className={`mt-4  px-2 py-2  text-sm duration-500  border rounded-md md:text-sm md:px-4 hover:shadow-lg   whitespace-nowrap text-white  ${
                selectedState === "Odisha"
                  ? " bg-primaryBlue"
                  : "border-primaryRed bg-primaryRed"
              } `}
              onClick={() => setShowBuyACar(true)}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Submitting
                </div>
              ) : (
                "Enquire Now"
              )}
            </button>
            <p className=" text-[10px] text-gray-500">
              *Disclaimer: I agree that by clicking the &apos;Enquir Now&apos;
              button below, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalBuyACar;
