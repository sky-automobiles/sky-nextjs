"use client";
import React, { useEffect } from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Services = () => {
  const {
    bookAServiceData,
    financeData,
    insuranceData,
    refreshing,
    setLoading,
    setBookAServiceData,
    setFinanceData,
    setInsuranceData,
  } = useDataContext();
  const [selectedTable, setSelectedTable] = React.useState("Service");
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
        if (selectedTable === "Service") {
          endPoint = "service";
        } else if (selectedTable === "Finance") {
          endPoint = "finance";
        } else {
          endPoint = "insurance";
        }
        if (rangeValue === "" ) {
          response = await fetch(`/api/${endPoint}?rangeValue=allData`);
        } else if  (
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
        if (selectedTable === "Service") {
          setBookAServiceData(result);
        } else if (selectedTable === "Finance") {
          setFinanceData(result);
        } else {
          setInsuranceData(result);
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
      header: "Phone ",
      size: 80,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      size: 120,
    }),
    columnHelper.accessor("model", {
      header: "Model",
      size: 120,
    }),
    columnHelper.accessor("isPickup", {
      header: "Pickup",
      size: 80,
    }),
    columnHelper.accessor("serviceDate", {
      header: "Service Date",
      size: 80,
    }),
    columnHelper.accessor("serviceType", {
      header: "Service Type",
      size: 120,
    }),
    columnHelper.accessor("address", {
      header: "Address",
      size: 170,
    }),
    columnHelper.accessor("state", {
      header: "City",
      size: 120,
    }),
    // columnHelper.accessor("state", {
    //   header: "state",
    //   size: 120,
    // }),

    // columnHelper.accessor("state", {
    //   header: "State",
    // }),
    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];

  // finance
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
    columnHelper.accessor("model", {
      header: "Model",
      size: 120,
    }),

    columnHelper.accessor("loanAmount", {
      header: "Loan Amount",
      size: 120,
    }),
    columnHelper.accessor("loanTenure", {
      header: "Loan Tenure",
      size: 120,
    }),

    columnHelper.accessor("city", {
      header: "City",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "state",
      size: 120,
    }),
  ];

  // insurance
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

    columnHelper.accessor("address", {
      header: "Address",
      size: 200,
    }),
    columnHelper.accessor("city", {
      header: "City",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "state",
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
              onClick={() => setSelectedTable("Service")}
              className={`  px-4 py-1.5 rounded text-sm min-w-36 ${
                selectedTable === "Service"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Book A Service
            </button>{" "}
            <button
              onClick={() => setSelectedTable("Finance")}
              className={`  px-4 py-1.5 rounded text-sm min-w-36 ${
                selectedTable === "Finance"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Finance
            </button>
            <button
              onClick={() => setSelectedTable("Insurance")}
              className={`  px-4 py-1.5 rounded text-sm min-w-36 ${
                selectedTable === "Insurance"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Insurance
            </button>
          </div>
        </div>

        <EnqTable
          data={
            selectedTable === "Service"
              ? bookAServiceData
              : selectedTable === "Finance"
              ? financeData
              : insuranceData
          }
          columns={
            selectedTable === "Service"
              ? columns
              : selectedTable === "Finance"
              ? columns2
              : columns3
          }
          fileName={
            selectedTable === "Service"
              ? "Book A Service Enquiries"
              : selectedTable === "Finance"
              ? "Finance Enquiries"
              : "Insurance Enquiries"
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

export default Services;
