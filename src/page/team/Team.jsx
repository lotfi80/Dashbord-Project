import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

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
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { acces } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                acces === "admin"
                  ? theme.palette.primary.dark
                  : acces === "manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              p: "5px",
              width: "99px",
              borderRadius: "5px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              color: theme.palette.primary.contrastText,
            }}
          >
            {acces === "admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ align: "#center" }}
              />
            )}
            {acces === "manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {acces === "user" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            <Typography
              sx={{ fontSize: "13px", color: "#fff" }}
              variant="body1"
            >
              {acces}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
