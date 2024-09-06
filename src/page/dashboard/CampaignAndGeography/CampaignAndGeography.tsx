import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pie/Pie";
import Bar from "../../bar/Bar";
import Choropleth from "../../geography/Choropleth";

export default function CampaignAndGeography() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} sx={{ mt: 2 }}>
      <Paper sx={{ width: "28%", minWidth: "400px", flexGrow: 1 }}>
        <Typography color={theme.palette.secondary.main} sx={{ padding: "30px 30px 0 30px" }} variant="h6" fontWeight="600">
          Campaing
        </Typography>
        <Pie height={"200px"} showLegends={false} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align={"center"}>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography color={theme.palette.secondary.main} sx={{ padding: "30px 30px 0 30px" }} variant="h6" fontWeight="600">
          Sales Quantity
        </Typography>
        <Bar height={"400px"} />
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Choropleth height={"460px"} showBorder={false} />
      </Paper>
    </Stack>
  );
}
