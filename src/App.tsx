import * as React from "react";
import { createTheme, styled, Theme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { getDesignTokens } from "./theme";
import { PaletteMode } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Update the theme only if the mode changes
  const storedMode = (localStorage.getItem("currentmode") as PaletteMode) || "light";
  const [mode, setMode] = React.useState<PaletteMode>(storedMode);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Topbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />

        <Sidebar DrawerHeader={DrawerHeader} open={open} handleDrawerClose={handleDrawerClose} />
      </Box>
    </ThemeProvider>
  );
}
