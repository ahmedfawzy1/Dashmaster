import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../../line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

export default function RevenueAndTransactions() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
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

      <Box sx={{ minWidth: "280px", maxHeight: 380, flexGrow: 1, overflow: "auto" }}>
        <Paper>
          <Typography color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2} variant="h6">
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((transaction) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography variant="body2">{transaction.user}</Typography>
                <Typography variant="body1">{transaction.date}</Typography>
                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(theme.palette.error.main)}
                  variant="body2"
                >
                  ${transaction.cost}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
