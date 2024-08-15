import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 35, headerAlign: "center", align: "center" },
    { field: "name", headerName: "Name", flex: 1, headerAlign: "center", align: "center" },
    { field: "email", headerName: "Email", flex: 1, headerAlign: "center", align: "center" },
    { field: "age", headerName: "Age", flex: 1, headerAlign: "center", align: "center" },
    { field: "phone", headerName: "Phone", flex: 1, headerAlign: "center", align: "center" },
    {
      field: "access",
      headerName: "Access",
      display: "flex",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell({ row: { access } }) {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#3da58a",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" && <AdminPanelSettingsOutlined fontSize="small" sx={{ color: "#fff" }} />}
            {access === "Manager" && <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />}
            {access === "User" && <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </>
  );
}
