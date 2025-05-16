// function App() {
//   return <div className="App">hello react</div>;
// }

// export default App;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SideBar from "./components/SideBar";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";

// const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>Lorem ipsum</Typography>
      </Box>
    </Box>
  );
}
