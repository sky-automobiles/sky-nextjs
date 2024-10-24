"use client";
import React, { useEffect } from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Others = () => {
  const {
    contactUsData,
    careerData,
    testDriveData,
    setTestDriveData,
    setContactUsData,
    setCareerData,
    homeEnqData,
    setHomeEnqData,
    setLoading,
    refreshing,
  } = useDataContext();
  const [selectedTable, setSelectedTable] = React.useState("Home");
  const [rangeValue, setRangeValue] = React.useState("");
  const [dateRange, setDateRange] = React.useState({
    startDate: "",
    endDate: "",
  });

  const columnHelper = createMRTColumnHelper<any>();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please login first");
      window.location.href = "/admin/login";
    }

    const fetchData = async () => {
      try {
        let response = null;
        let endPoint = "";
        if (selectedTable === "Home") {
          endPoint = "home";
        } else if (selectedTable === "Contact") {
          endPoint = "contactUs";
        } else if (selectedTable === "Career") {
          endPoint = "career";
        } else {
          endPoint = "test-drive";
        }
        if (rangeValue === "") {
          response = await fetch(`/api/${endPoint}?rangeValue=allData`);
        } else if (
          rangeValue === "Between" &&
          dateRange.startDate &&
          dateRange.endDate
        ) {
          response = await fetch(
            `/api/${endPoint}?rangeValue=${rangeValue}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`
          );
        } else if (rangeValue !== "Between") {
          response = await fetch(`/api/${endPoint}?rangeValue=${rangeValue}`);
        }

        if (!response?.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (selectedTable === "Contact") {
          setContactUsData(result);
        } else if (selectedTable === "Home") {
          setHomeEnqData(result);
        
        } else if (selectedTable === "Career") {
          setCareerData(result);
        }
         else {
          setTestDriveData(result);
        }
        // Update state with the fetched data
        setLoading(false);
        if (result.length === 0) {
          toast.error("No data found");
        } else toast.success(`${selectedTable} Data fetched successfully`);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [
    refreshing,
    setLoading,
    rangeValue,
    selectedTable,
    dateRange.endDate,
    dateRange.startDate,
  ]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please login first");
      window.location.href = "/admin/login";
    }
  }, [refreshing]);

  useEffect(() => {
    setRangeValue("");
  }, [selectedTable]);

  // Contact
  const columns = [
    columnHelper.accessor("date", {
      header: "Date",
      size: 40,
    }),
    columnHelper.accessor("time", {
      header: "Time",
      size: 120,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 120,
    }),
    columnHelper.accessor("phone", {
      header: "Phone Number",
      size: 120,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      size: 120,
    }),
    columnHelper.accessor("subject", {
      header: "Subject",
      size: 200,
    }),
    columnHelper.accessor("message", {
      header: "Message",
      size: 300,
    }),
    columnHelper.accessor("state", {
      header: "State",
      size: 120,
    }),
    // columnHelper.accessor("state", {
    //   header: "State",
    // }),
    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];
  // Career
  const columns2 = [
    columnHelper.accessor("date", {
      header: "Date",
      size: 40,
    }),
    columnHelper.accessor("time", {
      header: "Time",
      size: 120,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 120,
    }),
    columnHelper.accessor("phone", {
      header: "Phone Number",
      size: 120,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      size: 120,
    }),
    columnHelper.accessor("designation", {
      header: "designation",
      size: 120,
    }),
    columnHelper.accessor("experience", {
      header: "Experience",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "State",
      size: 120,
    }),
    // columnHelper.accessor("state", {
    //   header: "State",
    // }),
    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];
  //Test Drive
  const columns3 = [
    columnHelper.accessor("date", {
      header: "Date",
      size: 40,
    }),
    columnHelper.accessor("time", {
      header: "Time",
      size: 120,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 120,
    }),
    columnHelper.accessor("phone", {
      header: "Phone Number",
      size: 120,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      size: 120,
    }),
    columnHelper.accessor("model", {
      header: "Model",
      size: 120,
    }),
    columnHelper.accessor("channel", {
      header: "Channel",
      size: 80,
    }),
    columnHelper.accessor("outlet", {
      header: "Outlet",
      size: 300,
    }),
    columnHelper.accessor("state", {
      header: "State",
    }),
  ];
  //Home
  const columns4 = [
    columnHelper.accessor("date", {
      header: "Date",
      size: 40,
    }),
    columnHelper.accessor("time", {
      header: "Time",
      size: 120,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 120,
    }),
    columnHelper.accessor("phone", {
      header: "Phone Number",
      size: 120,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      size: 120,
    }),
    columnHelper.accessor("lookingFor", {
      header: "Loogking For",
      size: 120,
    }),

    columnHelper.accessor("state", {
      header: "State",
    }),
  ];

  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className="min-h-40 px-4">
        <div className="flex gap-4 flex-wrap items-center justify-between">
          {" "}
          <h5 className="text-xl my-4 text-primaryBlue uppercase">
            {selectedTable} Enquiries{" "}
          </h5>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTable("Home")}
              className={`  px-4 py-1.5 rounded text-sm min-w-28 ${
                selectedTable === "Home"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Homepage
            </button>{" "}
            <button
              onClick={() => setSelectedTable("Test Drive")}
              className={`  px-4 py-1.5 rounded text-sm min-w-28 ${
                selectedTable === "Test Drive"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Test Drive
            </button>{" "}
            <button
              onClick={() => setSelectedTable("Contact")}
              className={`  px-4 py-1.5 rounded text-sm min-w-28 ${
                selectedTable === "Contact"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Contact Us
            </button>{" "}
            <button
              onClick={() => setSelectedTable("Career")}
              className={`  px-4 py-1.5 rounded text-sm min-w-28 ${
                selectedTable === "Career"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Career
            </button>
          </div>
        </div>
        <EnqTable
          data={
            selectedTable === "Contact"
              ? contactUsData
              : selectedTable === "Career"
              ? careerData
              : selectedTable === "Test Drive"?
              testDriveData: homeEnqData
          }
          columns={
            selectedTable === "Contact"
              ? columns
              : selectedTable === "Career"
              ? columns2 
              : selectedTable === 'Home'?
              columns4:
              columns3
          }
          fileName={
            selectedTable === "Contact"
              ? "Contact-us Enquiries"
              : selectedTable === "Career"
              ? "Career Enquiries"

              : selectedTable === "Test Drive"?
               "Test-Drive Enquiries":" Homepage Enquiries"
          }
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
    </div>
  );
};

export default Others;
