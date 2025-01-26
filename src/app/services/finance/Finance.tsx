"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { models } from "@/constants";
import toast from "react-hot-toast";
import EMISlider from "./EMISlider";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  loanAmount: number;
  loanTenure: number;
}

const Finance: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "",
    city: "",
    loanAmount: 0,
    loanTenure: 0,
  });

  const { selectedState } = useAppContext();
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const data = models[index];

  const MIN1 = 1;
  const MAX1 = 30;
  const steps1 = 0.1;
  const MIN2 = 1;
  const MAX2 = 30;
  const steps2 = 0.01;
  const MIN3 = 1;
  const MAX3 = 10;
  const steps3 = 1;

  const [value1, setValue1] = useState(MIN1);
  const [value2, setValue2] = useState(MIN2);
  const [value3, setValue3] = useState(MIN3);
  const [loading, setLoading] = useState(false);

  // Calculate the EMI based on current slider values
  const calculateEMI = useCallback(
    (principal: number, rate: number, tenure: number) => {
      const rateOfInterest = rate / 100;
      const numberOfPayments = tenure * 12;
      const monthlyInterestRate = rateOfInterest / 12;
      const emi =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      return emi;
    },
    []
  );

  // Calculated values derived from the current inputs
  const principalAmount = value1 * 100000;
  const emi = calculateEMI(principalAmount, value2, value3);
  const totalInterest = emi * value3 * 12 - principalAmount;
  const totalAmount = principalAmount + totalInterest;

  const handleClickColor = (index: number): void => {
    setSelectedColor(index);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    console.log("Form Data:", { ...formData, state: selectedState });

    // toast.success("Thank You for contacting us. We will get back to you soon!");
    try {
      // Send the POST request
      const response = await fetch("/api/finance", {
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
      model: "",
      city: "",
      loanAmount: 0,
      loanTenure: 0,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className=" min-h-40 bg-primaryGray   ">
        <Image
          height={1080}
          width={1920}
          src="/images/other/finance_banner.webp"
          alt="Sky Automobiles Finance Banner"
          className="object-cover w-full h-full  max-h-[50vh] hidden sm:block"
        />
        <Image
          height={1920}
          width={500}
          src="/images/other/finance_mobile.webp"
          alt="Sky Automobiles Finance Banner"
          className="object-cover w-full h-full  min-h-[50vh]  sm:hidden"
        />
      </div>

      <div
        id="emi-calculator"
        className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2"
      >
        <div className="mb-16 lg:mb-24 mt-8">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 text-center">
            <span
              className={` ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              EMI{" "}
            </span>{" "}
            Calculator
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <h5 className="mb-2 text-xl font-semibold">{data?.subName}</h5>
              <p>
                Start from{" "}
                <span
                  className={` font-bold ${
                    selectedState === "Odisha"
                      ? "text-primaryBlue"
                      : "text-primaryRed"
                  }`}
                >
                  {data?.variants[0].price}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-primaryGray">Select the Model</span>
                <select
                  className={`w-min p-2 bg-transparent border-b-2  focus:outline-none mb-4 ${
                    selectedState === "Odisha"
                      ? "border-b-primaryBlue"
                      : "border-b-primaryRed"
                  }`}
                  name="index"
                  required
                  value={index}
                  onChange={(e) => setIndex(+e.target.value)}
                >
                  <optgroup label="Arena" className="text-sm text-primaryGray">
                    <option value="0">Alto K10</option>
                    <option value="1">Swift</option>
                    <option value="2">Brezza</option>
                    <option value="3">Dzire</option>
                    <option value="4">S-Presso</option>
                    <option value="5">Wagon R</option>
                    <option value="6">Ertiga</option>
                    <option value="7">Celerio</option>
                    <option value="8">Eeco</option>
                  </optgroup>
                  <optgroup label="Nexa" className="text-sm text-primaryGray">
                  <option value="9">e-Vitara</option>
                    <option value="10">Invicto</option>
                    <option value="11">Jimny</option>
                    <option value="12">Fronx</option>
                    <option value="13">Grand Vitara</option>
                    <option value="14">XL6</option>
                    <option value="15">Ciaz</option>
                    <option value="16">Baleno</option>
                    <option value="17">Ignis</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <img
                  src={data?.colors[selectedColor].img}
                  alt={data?.colors[selectedColor].colName}
                />
                <h5 className="mb-5 text-xl font-medium text-center">
                  {data?.colors[selectedColor].colName}
                </h5>
                <div className="flex flex-wrap justify-center gap-3">
                  {data?.colors.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => handleClickColor(index)}
                      className={`w-6 h-6 rounded-full cursor-pointer border flex justify-center items-center text-white ${
                        selectedColor === index &&
                        "shadow shadow-gray-500 border-2 animate-bounce"
                      }`}
                      style={{ backgroundColor: color.colorCode }}
                    >
                      {selectedColor === index && <p>&#10003;</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-3">
                <div className="flex items-end justify-between mb-2">
                  <div className="text-xl font-semibold">Loan Amount</div>
                  <div
                    className={` text-white pr-3 py-1 w-36 text-right rounded-lg ${
                      selectedState === "Odisha"
                        ? "bg-primaryBlue"
                        : "bg-primaryRed"
                    }`}
                  >
                    <span className="pr-2 text-sm font-light">₹</span>
                    <span className="font-bold">{value1}</span>
                    <span className="pl-2 text-sm font-normal">Lakhs</span>
                  </div>
                </div>

                <EMISlider
                  MIN={MIN1}
                  value={value1}
                  setValue={setValue1}
                  steps={steps1}
                  MAX={MAX1}
                  points={[]}
                />
              </div>

              <div className="mb-3">
                <div className="flex items-end justify-between mb-2">
                  <div className="text-xl font-semibold">Interest Rate</div>
                  <div
                    className={` text-white pr-3 py-1 w-36 text-right rounded-lg ${
                      selectedState === "Odisha"
                        ? "bg-primaryBlue"
                        : "bg-primaryRed"
                    }`}
                  >
                    <span className="font-bold">{value2}</span>
                    <span className="pl-2 text-sm font-normal">%</span>
                  </div>
                </div>
                <EMISlider
                  MIN={MIN2}
                  value={value2}
                  setValue={setValue2}
                  steps={steps2}
                  MAX={MAX2}
                  points={[]}
                />
              </div>

              <div className="mb-3">
                <div className="flex items-end justify-between mb-2">
                  <div className="text-xl font-semibold">Tenure</div>
                  <div
                    className={` text-white pr-3 py-1 w-36 text-right rounded-lg ${
                      selectedState === "Odisha"
                        ? "bg-primaryBlue"
                        : "bg-primaryRed"
                    }`}
                  >
                    <span className="font-bold">{value3}</span>
                    <span className="pl-2 text-sm font-normal">Years</span>
                  </div>
                </div>
                <EMISlider
                  MIN={MIN3}
                  value={value3}
                  setValue={setValue3}
                  steps={steps3}
                  MAX={MAX3}
                  points={[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  ]}
                />
              </div>

              <div className="mt-8">
                <div className="flex flex-col mb-2 lg:mb-6">
                  <span className="text-lg font-semibold">
                    EMI you’ll pay every month
                  </span>
                  <span
                    className={`font-bold text-2xl  ${
                      selectedState === "Odisha"
                        ? "text-primaryBlue"
                        : "text-primaryRed"
                    }`}
                  >
                    ₹ {emi.toFixed()}
                  </span>
                </div>

                <div className="flex justify-between gap-2 lg:gap-4 ">
                  <div className="flex justify-center items-center shadow-md min-h-20 min-w-20 rounded-lg flex-col p-6 w-full ">
                    <span className="text-base font-light text-gray-500">
                      Principal Amount
                    </span>
                    <h6 className="font-bold text-lg text-primaryGray">
                      ₹ {principalAmount.toFixed()}
                    </h6>
                  </div>
                  <div className="flex justify-center items-center shadow-md min-h-20 min-w-20 rounded-lg flex-col p-6 w-full ">
                    <span className="text-base font-light text-gray-500">
                      Total Interest
                    </span>
                    <h6 className="font-bold text-lg text-primaryGray">
                      ₹ {totalInterest.toFixed()}
                    </h6>
                  </div>
                  <div className="flex justify-center items-center shadow-md min-h-20 min-w-20 rounded-lg flex-col p-6 w-full ">
                    <span className="text-base font-light text-gray-500">
                      Total Amount
                    </span>
                    <h6 className="font-bold text-lg text-primaryGray">
                      ₹ {totalAmount.toFixed()}
                    </h6>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Note:drag the slider to change the values
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-2">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 text-center">
            Get a{" "}
            <span
              className={` ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              {" "}
              Call{" "}
            </span>{" "}
            back
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-6">
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
            />

            <input
              type="tel"
              placeholder="Phone*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
            />

            <input
              type="email"
              placeholder="Email*"
              name="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              title="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
            />

            <input
              type="text"
              placeholder="City*"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
            />
            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
            >
              <option value="">Select Model</option>
              <option value="Alto K10">Alto K10</option>
              <option value="Swift">Swift</option>
              <option value="Brezza">Brezza</option>
              <option value="Dzire">Dzire</option>
              <option value="S-Presso">S-Presso</option>
              <option value="Wagon R">Wagon R</option>
              <option value="Ertiga">Ertiga</option>
              <option value="Celerio">Celerio</option>
              <option value="Eeco">Eeco</option>
              <option value="Jimny">Jimny</option>
              <option value="Fronx">Fronx</option>
              <option value="Invicto">Invicto</option>
              <option value="Grand Vitara">Grand Vitara</option>
              <option value="XL6">XL6</option>
              <option value="Ciaz">Ciaz</option>
              <option value="Baleno">Baleno</option>
              <option value="Ignis">Ignis</option>
            </select>

            <input
              type="number"
              placeholder="Loan Amount*"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              name="loanAmount"
              value={formData.loanAmount ? formData.loanAmount : ""}
              onChange={handleChange}
              required
              min={100000}
              max={10000000}
              step={1000}
              title="Loan Amount should be between 100000 and 10000000"
            />

            <input
              type="number"
              placeholder="Loan Tenure (in years)*"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              name="loanTenure"
              value={formData.loanTenure ? formData.loanTenure : ""}
              onChange={handleChange}
              required
              min={1}
              max={30}
              step={1}
              pattern="[0-9]{1,2}"
              title="Loan Tenure should be between 1 and 30"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className=" mt-4 text-center bg-primaryRed rounded-sm py-2 text-white px-6 lg:px-10"
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
            *Disclaimer: By clicking &apos;Submit&apos;, I am explicitly
            soliciting a call and message via whatsapp or any other medium from
            us.
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Finance;
