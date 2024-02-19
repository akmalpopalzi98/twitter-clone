import { Box, Button, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import HandleButton from "../components/handleButton";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgb(52, 73, 94)",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          // backgroundColor: "rgb( 23, 32, 42  )",
          display: "flex",
          minWidth: "20%",
          flexDirection: "column",
          justifyContent: "start",
          paddingTop: "20px",
          marginLeft: "50px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Diversity2Icon
            sx={{
              color: "white",
              padding: "20px",
            }}
          />
        </Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              justifyContent: "start",
              gap: "20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            <HomeIcon />
            Home
          </Button>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              justifyContent: "start",
              gap: "20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            <EmailIcon />
            Messages
          </Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              justifyContent: "start",
              gap: "20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            <AccountBoxIcon />
            Profile
          </Button>
        </Link>
        <HandleButton />
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
