import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { columns, rows } from "./data";
import { GridToolbar } from "@mui/x-data-grid/internals";

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
