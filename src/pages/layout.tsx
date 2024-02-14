import { Box, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "rgb(187, 143, 206)",
          display: "flex",
          height: "100vh",
          width: "20%",
          borderRadius: "10px",
          flexDirection: "column",
          justifyContent: "start",
          paddingTop: "50px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{ width: "100%", color: "white" }} variant="text">
            Home
          </Button>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <Button sx={{ width: "100%", color: "white" }} variant="text">
            Messages
          </Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button sx={{ width: "100%", color: "white" }} variant="text">
            Profile
          </Button>
        </Link>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
