"use client";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";
import { mkConfig } from "export-to-csv";

const RecentEnqTable = ({ data, columns }: { data: any; columns: any }) => {
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: false,
    initialState: {
      density: "compact",
      pagination: {
        pageIndex: 0, // Set the default page index
        pageSize: 15, // Set the default number of rows per page
      },
    },
    // enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",

    //  enableDensityToggle: false,
    muiTableContainerProps: { sx: { minHeight: "30vh", maxHeight: "35vh" } },
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
        Recent 30 Enquiries
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
        border: "1px solid #e1e3e6",
        borderRadius: "4px",
      }}
    >
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default RecentEnqTable;
