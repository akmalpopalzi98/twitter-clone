import { Box, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Box>
        <Link to="/">Home</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/profile">Profile</Link>
      </Box>
      <Outlet />
    </>
  );
};

export default layout;
