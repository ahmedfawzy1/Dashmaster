import { Box, Button, Stack } from "@mui/material";
import OverviewStats from "./OverviewStats/OverviewStats";
import RevenueAndTransactions from "./RevenueAndTransactions/RevenueAndTransactions";
import CampaignAndGeography from "./CampaignAndGeography/CampaignAndGeography";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header/Header";

export default function Dashboard() {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header title={"DASHBORD"} subTitle={"Welcome to your dashboard"} IsHomePage={true} />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button sx={{ padding: "6px 8px", textTransform: "capitalize" }} variant="contained" color="primary">
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <OverviewStats />
      <RevenueAndTransactions />
      <CampaignAndGeography />
    </div>
  );
}
