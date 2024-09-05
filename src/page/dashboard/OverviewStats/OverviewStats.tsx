import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data";

export default function OverviewStats() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={{ xs: "center", sm: "space-between" }} flexWrap={"wrap"} gap={1}>
      <Card
        icon={<Email sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"12.361"}
        subTitle={"Email Sent"}
        data={data1}
        increase={"+14%"}
        scheme="nivo"
      />
      <Card
        icon={<PointOfSale sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"431,225"}
        subTitle={"Sale obtained"}
        data={data2}
        increase={"+21%"}
        scheme="category10"
      />
      <Card
        icon={<PersonAdd sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"32,441"}
        subTitle={"New Client"}
        data={data3}
        increase={"+5%"}
        scheme="accent"
      />
      <Card
        icon={<Traffic sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        data={data4}
        increase={"+43%"}
        scheme="dark2"
      />
    </Stack>
  );
}
