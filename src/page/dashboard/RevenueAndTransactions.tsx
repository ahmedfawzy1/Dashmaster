import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../line/Line";
import { DownloadOutlined } from "@mui/icons-material";

export default function RevenueAndTransactions() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Typography color={theme.palette.secondary.main} mb={1} mt={2} ml={4} variant="h6">
              Revenue Generate
            </Typography>
            <Typography ml={4} variant="body2">
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
              <IconButton />
            </IconButton>
          </Box>
        </Stack>
        <Line height={"280px"} />
      </Paper>

      <Box sx={{ height: 350, flexGrow: 1 }}>
        <Paper>
          <Typography color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2} variant="h6">
            Recent Transactions
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
}
