import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "acces",
      headerName: "Acces",
      width: 300,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { acces } }) => {
        return (
          <Box
            sx={{
              bgcolor: theme.palette.primary.dark,
              p: "5px",
              width: "99px",
              borderRadius: "5px",
              textAlign: "center",
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="body1">{acces}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Team;
