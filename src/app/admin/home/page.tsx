"use client";
import { useDataContext } from "@/context/index2";
import React from "react";
import CountUp from "react-countup";
import { GiCheckMark } from "react-icons/gi";
import { SiSuzuki } from "react-icons/si";
import { BarChart, pieArcLabelClasses } from "@mui/x-charts";
import { createMRTColumnHelper } from "material-react-table";

import RecentEnqTable from "./RecentEnq";

const Home = () => {
  const { arenaData, nexaData, recentData, sellACarData, buyACarData } =
    useDataContext();
  // console.log(arenaData, "arena data");
  const columnHelper = createMRTColumnHelper<any>();

  const columns = [
    //  columnHelper.accessor("date", {
    //    header: "Date",
    //    size: 40,
    //  }),
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
    //  columnHelper.accessor("email", {
    //    header: "Email",
    //    size: 120,
    //  }),
    columnHelper.accessor("model", {
      header: "Model",
      size: 120,
    }),
  ];
  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className=" px-4">
        <h5 className=" mt-4 text-primaryBlue uppercase">Sky Automobile</h5>
        <h4 className="text-3xl mb-4 text-primaryBlue uppercase">Dashboard</h4>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-3  min-h-40 rounded-lg flex flex-col ">
          <div className="flex flex-wrap items-start gap-2 md:col-span-2 md:flex-nowrap lg:w-full ">
            <div className="px-4 py-3 rounded-lg bg-secondaryGray4 lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
              <div className="p-2 rounded-lg bg-blue-500/20  h-12 w-12 flex justify-center items-center">
                <SiSuzuki className="text-xl text-blue-600" />
              </div>
              <p className="py-2 text-sm">Total Arena Enquires</p>
              <div className="flex items-center justify-between gap-4">
                <p className="text-3xl font-semibold">
                  <CountUp
                    start={0}
                    end={10}
                    // end={arenaData.length > 0 ? arenaData.length - 1 : 0}
                    duration={4}
                  />
                </p>
                {/* <p className="flex gap-0.5  font-bold text-green-700 items-center">
                  <IoMdArrowDropup className="text-lg" /> 5%
                </p> */}
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-secondaryGray4 lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
              <div className="p-2 rounded-lg bg-black/10 h-12 w-12 flex justify-center items-center  ">
                <p className="text-xl font-serif font-bold">N</p>
              </div>

              <p className="py-2 text-sm">Total Nexa Enquires</p>
              <div className="flex items-center justify-between gap-4">
                <p className="text-3xl font-semibold">
                  <CountUp
                    start={0}
                    end={20}
                    // end={nexaData.length > 0 ? nexaData.length - 1 : 0}
                    duration={4}
                  />
                </p>
                {/* <p className="flex gap-0.5  font-bold text-red-500 items-center">
                  <IoMdArrowDropup className="text-lg rotate-180" /> 5%
                </p> */}
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-secondaryGray4 lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
              <div className="p-2 rounded-lg bg-green-500/20 h-12 w-12 flex justify-center items-center ">
                <GiCheckMark className="text-2xl text-green-600" />
              </div>

              <p className="py-2 text-sm">Total Buy Enquires</p>
              <div className="flex items-center justify-between gap-4">
                <p className="text-3xl font-semibold">
                  <CountUp
                    start={0}
                    end={25}
                    // end={buyACarData.length > 0 ? buyACarData.length - 1 : 0}
                    duration={4}
                  />
                </p>
                {/* <p className="flex gap-0.5  font-bold text-green-700 items-center">
                  <IoMdArrowDropup className="text-lg" /> 5%
                </p> */}
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-secondaryGray4 lg:min-h-28 lg:min-w-28 md:w-full lg:max-w-xs">
              <div className="p-2 rounded-lg bg-red-500/20 h-12 w-12 flex justify-center items-center ">
                <GiCheckMark className="text-2xl text-red-400" />
              </div>
              <p className="py-2 text-sm">Total Sell Enquires</p>
              <div className="flex items-center justify-between gap-4">
                <p className="text-3xl font-semibold">
                  <CountUp
                    start={0}
                    end={10}
                    // end={sellACarData.length > 0 ? sellACarData.length - 1 : 0}
                    duration={4}
                  />
                </p>
                {/* <p className="flex gap-0.5  font-bold text-red-500 items-center">
                  <IoMdArrowDropup className="text-lg" /> 5%
                </p> */}
              </div>
            </div>
          </div>
          <div className=" h-60">
            <BasicBars />
          </div>
        </div>
        <div className="col-span-2 mx-2   rounded-lg ">
          <RecentEnqTable data={recentData} columns={columns} />
        </div>
        {/* <div className="col-span-3 bg-secondaryGray4 min-h-60 rounded-lg"></div> */}
      </div>
    </div>
  );
};

const BasicBars = () => {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          dataKey: "date",
          // Remove the color property if not supported
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
          ],
        },
      ]}
      sx={{
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
        },
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fontFamily: "Roboto",
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.5",
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          strokeWidth: 0.4,
        },
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          strokeWidth: 0.4,
        },
      }}
      series={[
        {
          data: [
            4, 8, 5, 10, 2, 4, 10, 4, 8, 5, 4, 2, 4, 11, 4, 8, 5, 6, 2, 4, 13,
            4, 8, 5, 9, 2, 4, 12, 4, 8, 5, 8,
          ],
          // Remove the color property if not supported
          // name: "Revenue", // Check if 'name' is a supported property
          color: "#303a9b",
          type: "bar",
        },
      ]}
      className="w-full min-w-20 min-h-20"
      borderRadius={20}
      grid={{ horizontal: true }}
    />
  );
};

export default Home;
