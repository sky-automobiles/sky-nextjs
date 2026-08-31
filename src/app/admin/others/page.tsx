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
    const isAdmin = Cookies.get("isAdmin");
    if (!isAdmin) {
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
        } else {
          endPoint = "career";
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
        } else {
          setCareerData(result);
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
    const isAdmin = Cookies.get("isAdmin");
    if (!isAdmin) {
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
              : homeEnqData
          }
          columns={
            selectedTable === "Contact"
              ? columns
              : selectedTable === "Career"
              ? columns2
              : columns4
          }
          fileName={
            selectedTable === "Contact"
              ? "Contact-us Enquiries"
              : selectedTable === "Career"
              ? "Career Enquiries"
              : "Homepage Enquiries"
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
