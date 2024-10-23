"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "./EnquiryTable";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Arena = () => {
  const { refreshing, setLoading, arenaData, setArenaData } = useDataContext();

  const [rangeValue, setRangeValue] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please login first");
      window.location.href = "/admin/login";
    }

    const fetchData = async () => {
      try {
        let response = null;
        if (rangeValue === "") {
          response = await fetch(
            `/api/on-road-price?rangeValue=allData&channel=Arena`
          );
        } else if (rangeValue === "Between" && dateRange.startDate && dateRange.endDate) {
          response = await fetch(`/api/on-road-price?rangeValue=${rangeValue}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&channel=Arena`);
        } else if (rangeValue !== "Between") {
          response = await fetch(`/api/on-road-price?rangeValue=${rangeValue}&channel=Arena`);
        }

        if (!response?.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setArenaData(result); // Update state with the fetched data
        setLoading(false);
        if (result.length === 0) {
          toast.error("No data found");
        } else toast.success("Arena Data fetched successfully");
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [refreshing, setLoading, rangeValue, dateRange.endDate, dateRange.startDate]);

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
    columnHelper.accessor("variant", {
      header: "Variant",
      size: 120,
    }),
    columnHelper.accessor("outlet", {
      header: "Outlet",
      size: 300,
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
        <h5 className="text-xl my-4 text-primaryBlue uppercase">
          Arena Enquiries{" "}
        </h5>
        <EnqTable
          data={arenaData}
          columns={columns}
          fileName="Arena Enquiries"
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
    </div>
  );
};

export default Arena;
