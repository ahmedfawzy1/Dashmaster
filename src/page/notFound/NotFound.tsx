import { Box, Typography, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();

  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        The link you followed might be broken or outdated
      </Typography>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        Please try again letter
      </Typography>
    </Box>
  );
}
