"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const TestDrive = () => {
  const { refreshing, setLoading, testDriveData, setTestDriveData } =
    useDataContext();

  const [rangeValue, setRangeValue] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  useEffect(() => {
    const isAdmin = Cookies.get("isAdmin");
    if (!isAdmin) {
      toast.error("Please login first");
      window.location.href = "/admin/login";
    }

    const fetchData = async () => {
      try {
        let response = null;
        if (rangeValue === "") {
          response = await fetch(`/api/test-drive?rangeValue=allData`);
        } else if (
          rangeValue === "Between" &&
          dateRange.startDate &&
          dateRange.endDate
        ) {
          response = await fetch(
            `/api/test-drive?rangeValue=${rangeValue}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`
          );
        } else if (rangeValue !== "Between") {
          response = await fetch(`/api/test-drive?rangeValue=${rangeValue}`);
        }

        if (!response?.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setTestDriveData(result);
        setLoading(false);
        if (result.length === 0) {
          toast.error("No data found");
        } else toast.success("Test Drive Data fetched successfully");
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [
    refreshing,
    setLoading,
    rangeValue,
    dateRange.endDate,
    dateRange.startDate,
  ]);

  const columnHelper = createMRTColumnHelper<any>();

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
      size: 220,
    }),
    columnHelper.accessor("leadFrom", {
      header: "Lead Source",
      size: 220,
    }),
    columnHelper.accessor("state", {
      header: "State",
      size: 100,
    }),
  ];

  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className="min-h-40 px-4">
        <h5 className="text-xl my-4 text-primaryBlue uppercase">
          Test Drive Enquiries{" "}
        </h5>
        <EnqTable
          data={testDriveData}
          columns={columns}
          fileName="Test Drive Enquiries"
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
    </div>
  );
};

export default TestDrive;
