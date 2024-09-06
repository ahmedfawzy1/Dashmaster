import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data.ts";
import Header from "../../components/Header/Header.tsx";

export default function Contacts() {
  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"} IsHomePage={false} />
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
