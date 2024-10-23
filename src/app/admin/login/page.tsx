"use client";
import React, { useState } from "react";
// import loginImg from "../assets/images/login-image.webp";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDataContext } from "@/context/index2";
import { FaSpinner } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setRefreshing, refreshing } = useDataContext();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault(); // Prevent default form submission
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      const res = await (await fetch("/api/login", options)).json();
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // });
      //  const res = await axios.post("/api/driver/login", values);
      if (res.status === "success") {
        toast.success("Login successful");
        //   cookies().set("token", response.data.token, { expires: 7 }); // Expires in 7 days
        setRefreshing(!refreshing);
        router.push("/admin/arena");
        // window.location.href = "/admin/arena"; // Navigate to /popup
      } else {
        toast.error(res.message);
        console.log(res);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  //   // Check if both email and password are provided
  //   const isFormValid = email && password;

  return (
    <div className="h-screen w-full bg-[#4B58C7] flex justify-center items-center relative overflow-hidden">
      {/* Left and right background circles */}
      <div className="absolute p-10 bg-gradient-to-r from-[#3541aa] via-[#3541aa] to-[#EA3A51] rounded-full h-96 w-96 top-0 right-[500px] z-10 animate-custom-spin"></div>
      <div className="absolute p-10 bg-gradient-to-r from-[#3541aa] via-[#3541aa] to-[#EA3A51] rounded-full h-96 w-96 bottom-0 left-[260px]  z-10 animate-custom-spin"></div>
      {/* <div className="absolute bg-[rgb(234,58,81)] h-[300px] w-[100px] hover:w-[600px]  top-0 left-0 z-10 clip-wave2"></div>
      <div className="absolute bg-[#EA3A51] h-[300px] w-[150px] bottom-0 right-0 z-50 clip-wave"></div> */}

      {/* Login box */}
      <div className="h-[80vh] w-[80vw] bg-white z-50 rounded-[50px]  flex shadow-2xl relative overflow-hidden">
        {/* Left image section */}
        <div className="flex flex-col items-center justify-center w-3/5 h-full bg-white">
          <Image
            src="/images/other/logo.png"
            alt="logo"
            width={300}
            height={300}
            className={`w-auto h-12 rounded-lg md:h-14 duration-500 mb-1  absolute top-0 left-0 m-2 `}
          />{" "}
          {/* <img
            src={logo}
            alt="Login illustration"
            className="absolute top-0 left-0 m-2" 
          />*/}
          <img
            src="https://www.truid.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftruid-usecases.90d0a50f.gif&w=828&q=75"
            alt="Login illustration"
            className="h-3/4"
          />
        </div>

        {/* Right form section */}
        <div className="h-full w-2/5 bg-[#303A9A] p-8 flex flex-col items-center ">
          <h1 className="pt-12 text-4xl text-center text-white">
            Welcome Back
          </h1>
          <h2 className="text-lg text-center text-white">
            Sign in to your account
          </h2>

          <form
            className="flex flex-col items-center w-full mt-16 text-white"
            onSubmit={handleSubmit}
          >
            {/* email input */}
            <label className="mb-2 w-80" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-80 p-2 mb-6 bg-[#606bc1] text-white rounded-lg"
            />

            {/* Password input */}
            <label className="mb-2 w-80" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-80 p-2 mb-28 bg-[#606bc1] text-white rounded-lg"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              //   disabled={!isFormValid}
              className='hover:shadow-custom-red rounded-xl px-32 py-2.5 overflow-hidden group bg-[#EA3A51] relative
                   hover:bg-gradient-to-r hover:from-[#EA3A51] hover:to-[#EA3A51]  hover:ring-4 hover:ring-[#fa0324] transition-all ease-out duration-100"
              '
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-24 bg-white opacity-15 rotate-12 group-hover:-translate-x-72 ease"></span>
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Submitting
                </div>
              ) : (
                "Login Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
