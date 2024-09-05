import { Box, Button } from "@mui/material";
import OverviewStats from "./OverviewStats/OverviewStats";
import RevenueAndTransactions from "./RevenueAndTransactions";
import CampaignAndGeography from "./CampaignAndGeography";
import { DownloadOutlined } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <div>
      <Box sx={{ textAlign: "right" }}>
        <Button sx={{ padding: "6px 8px", textTransform: "capitalize" }} variant="contained" color="primary">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <OverviewStats />
      <RevenueAndTransactions />
      <CampaignAndGeography />
    </div>
  );
}
