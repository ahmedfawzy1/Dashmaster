import { Box, Typography, useTheme } from "@mui/material";

interface HeaderProps {
  title: string;
  subTitle: string;
  IsHomePage: boolean;
}

export default function Header({ title, subTitle, IsHomePage = false }: HeaderProps) {
  const theme = useTheme();

  return (
    <Box mb={IsHomePage ? 2 : 3}>
      <Typography sx={{ color: theme.palette.info.light, fontWeight: "bold" }} variant="h5">
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}
