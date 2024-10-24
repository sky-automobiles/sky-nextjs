"use client";
import React, { useEffect } from "react";
import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const TrueValue = () => {
  const {
    buyACarData,
    sellACarData,
    refreshing,
    setLoading,
    setSellACarData,
    setBuyACarData,
  } = useDataContext();
  const [showSell, setShowSell] = React.useState(true);
  const [rangeValue, setRangeValue] = React.useState("");
  const [dateRange, setDateRange] = React.useState({
    startDate: "",
    endDate: "",
  });

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
        if (showSell) {
          endPoint = "sell-your-car";
        } else {
          endPoint = "buy-a-car";
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
        if (showSell) {
          setSellACarData(result);
        } else {
          setBuyACarData(result);
        }
        // Update state with the fetched data
        setLoading(false);
        if (result.length === 0) {
          toast.error("No data found");
        } else
          // toast.success(
          //   `${showSell ? "Sell A Car" : "Buy A Car"} Data fetched successfully`
          // );
          toast.success("True Value Data fetched successfully");
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

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please login first");
      window.location.href = "/admin/login";
    }
  }, [refreshing]);

  useEffect(() => {
    setRangeValue("");
  }, [showSell]);

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
    columnHelper.accessor("carNumber", {
      header: "Car Number",
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
    columnHelper.accessor("carModel", {
      header: "Model",
      size: 120,
    }),
    columnHelper.accessor("carVariant", {
      header: "car Variant",
      size: 120,
    }),
    columnHelper.accessor("makeYear", {
      header: "Make Year",
      size: 120,
    }),
    columnHelper.accessor("fuelType", {
      header: "Fuel",
      size: 120,
    }),
    columnHelper.accessor("ownerShip", {
      header: "Ownership",
      size: 120,
    }),

    columnHelper.accessor("kilometerDriven", {
      header: "KM Driven",
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
            Truevalue Enquiries - {showSell ? "Sell A Car" : "Buy A Car"}
          </h5>
          {/* <div className="flex gap-2">
            <button
              onClick={() => setShowSell(false)}
              className={`  px-4 py-1.5 rounded text-sm border min-w-36 ${
                showSell ? "border-primaryBlue" : "bg-primaryBlue text-white"
              }`}
            >
              Buy A Car
            </button>{" "}
            <button
              onClick={() => setShowSell(true)}
              className={`  px-4 py-1.5 rounded text-sm border min-w-36 ${
                !showSell ? " border-primaryBlue" : "bg-primaryBlue text-white"
              }`}
            >
              Sell A Car
            </button>
          </div> */}
        </div>

        <EnqTable
          data={showSell ? sellACarData : buyACarData}
          columns={showSell ? columns2 : columns}
          fileName={showSell ? "Sell A Car Enquiries" : "Buy A Car Enquiries"}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
    </div>
  );
};

export default TrueValue;
