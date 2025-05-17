import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import { GridToolbar } from "@mui/x-data-grid/internals";

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;
