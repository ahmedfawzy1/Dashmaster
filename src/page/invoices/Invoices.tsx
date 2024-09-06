import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data.ts";
import Header from "../../components/Header/Header.tsx";

export default function Invoices() {
  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} IsHomePage={false} />
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
