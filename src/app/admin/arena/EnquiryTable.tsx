"use client";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, Select } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";

import { FiRefreshCcw, FiSearch } from "react-icons/fi";
import { useDataContext } from "@/context/index2";
import { ImSpinner } from "react-icons/im";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const EnqTable = ({
  data,
  columns,
  fileName,
  rangeValue,
  setRangeValue,
  dateRange,
  setDateRange,
}: {
  data: any;
  columns: any;
  fileName?: string;
  rangeValue?: string;
  setRangeValue?: any;
  dateRange?: any;
  setDateRange?: any;
}) => {
  const { setRefreshing, refreshing, loading } = useDataContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // You can now use dateRange for your logic
    console.log(dateRange);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setDateRange((prev: any) => ({ ...prev, [name]: value }));
  };

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = null;
  //     try {
  //       if (channel) {
  //         response = await fetch(
  //           `/api/${endPoint}?rangeValue=${rangeValue}&channel=${channel}`
  //         );
  //       } else {
  //         response = await fetch(`/api/${endPoint}?rangeValue=${rangeValue}`);
  //       }

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const result = await response.json();
  //       setState(result); // Update state with the fetched data
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };

  //   fetchData();
  // }, [rangeValue]); // Trigger fetch on rangeValue change
  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const handleRefreshData = () => {
    // window.location.reload();
    setRefreshing(!refreshing);
  };

  useEffect(() => {
    if (rangeValue !== "Between") {
      setDateRange({ startDate: "", endDate: "" });
    }
  }, [rangeValue]);

  // const handleExportRows = (rows: MRT_Row<Person>[]) => {
  //   const rowData = rows.map((row) => row.original);
  //   const csv = generateCsv(csvConfig)(rowData);
  //   download(csvConfig)(csv);
  // };

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: true,
    initialState: {
      density: "compact",
      pagination: {
        pageIndex: 0, // Set the default page index
        pageSize: 15, // Set the default number of rows per page
      },
    },
    // state: {
    //   showProgressBars: loading,
    // },
    // enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    //  enableDensityToggle: false,
    muiTableContainerProps: { sx: { minHeight: "69vh", maxHeight: "70vh" } },
    muiTableBodyCellProps: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
      }),
    },
    renderTopToolbarCustomActions: () => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          //   padding: "8px",
          flexWrap: "wrap",
          marginTop: "8px",
          marginBottom: "4px",
        }}
      >
        {/* <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          // onClick={() => alert("Not yet implemented")}
          variant="contained"
          style={{ backgroundColor: "#303a9b", color: "white" }}
        >
          Car Enquiry
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => alert("Not yet implemented")}
          variant="outlined"
          style={{ color: "#303a9b", borderColor: "#303a9b" }}
        >
          Test Drive
        </Button> */}
        <Select
          native
          // value={dateRange} // Set the value to the state variable
          // onChange={handleChangeDateRange}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          className="h-9 p-1 border-none foucs:outline-none"
          variant="outlined"
          style={{ color: "#303a9b", borderColor: "#303a9b" }}
        >
          {/* <option value="">All Enquiries</option> */}
          <option value="allData">All Data</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="last3Months">Last 3 Months</option>
          <option value="last6Months">Last 6 Months</option>
          <option value="last12Months">Last 12 Months</option>
          <option value="Between">Between Dates</option>
        </Select>{" "}
        {rangeValue === "Between" && (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative">
              <input
                type="date"
                name="startDate"
                value={dateRange.startDate}
                max={
                  dateRange.endDate || new Date().toISOString().split("T")[0]
                }
                required
                onChange={handleDateChange}
                className="border rounded-md px-4 py-1.5"
              />
              <label className="absolute -top-2 left-1 text-xs bg-white px-1 text-gray-400">
                Start Date
              </label>
            </div>
            <div className="relative">
              <input
                type="date"
                name="endDate"
                value={dateRange.endDate}
                required
                min={dateRange.startDate || ""}
                onChange={handleDateChange}
                className="border rounded-md px-4 py-1.5"
              />
              <label className="absolute -top-2 left-1 text-xs bg-white px-1 text-gray-400">
                End Date
              </label>
            </div>
            <button
              type="submit"
              onSubmit={(e) => {
                e.preventDefault();
                setRefreshing(!refreshing);
              }}
              className="mr-10 ml-2 flex items-center gap-2 border px-4 py-1 rounded-lg bg-primaryBlue text-white"
            >
              <FiSearch /> Search
            </button>
          </form>
        )}
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleRefreshData}
          startIcon={<FiRefreshCcw className="text-sm" />}
          variant="outlined"
          style={{ borderColor: "#303a9b", color: "#303a9b", height: "35px" }}
        >
          Refresh
        </Button>
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
          variant="contained"
          style={{ backgroundColor: "#303a9b", color: "white", height: "35px" }}
        >
          Export
        </Button>
        {/* <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button> */}
        {/* <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button> */}
      </Box>
    ),
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        boxShadow: "none", // Remove shadow from the table
        // borderTop: "1px solid #e1e3e6",
        // borderRight: "0px solid #e1e3e6",
        // borderBottom: "1px solid #e1e3e6",
        // borderLeft: "1px solid #e1e3e6",
        // border: "1px solid #e1e3e6",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      {loading && (
        <div className="flex justify-center items-center h-[calc(100%-34px)] gap-3 absolute top-0 left-0 bg-secondaryGray2 w-full z-10 bg-opacity-10 text-primaryBlue rounded-lg ">
          {" "}
          <ImSpinner className="animate-spin text-3xl " />{" "}
          <span className=" text-xl">Loading...</span>
        </div>
      )}
      <MaterialReactTable table={table} />

      <div className="flex flex-col items-center justify-between  md:flex-row  pt-1">
        <p className="text-xs">© 2024 Sky Automobiles All Rights Reserved.</p>
        <div className="flex items-center gap-2 text-xs lg:gap-4">
          Powered by
          <a
            href="https://www.broaddcast.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <img
              src="https://www.broaddcast.com/assets/images/BroaddCast-Logo.svg"
              alt="Broaddcast"
              className="h-8 -ml-2"
            />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default EnqTable;
