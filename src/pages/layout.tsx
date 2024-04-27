import { Box, Button, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import HandleButton from "../components/handleButton";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useContext } from "react";
import { IconHighlightContext } from "../context/IconHighlightContext";

const Layout = () => {
  const { icon } = useContext(IconHighlightContext);
  console.log(icon);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgb( 74, 35, 90 )",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minWidth: "20%",
          flexDirection: "column",
          justifyContent: "start",
          paddingTop: "20px",
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
          <FlutterDashIcon
            sx={{
              color: "white",
              padding: "20px",
              height: "100%",
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
              paddingLeft: "20px",
              gap: "20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            <HomeIcon />
            <Typography variant="h6">Home</Typography>
          </Button>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              justifyContent: "start",
              paddingLeft: "20px",

              gap: "20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            <EmailIcon />
            <Typography variant="h6">Messages</Typography>
          </Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              justifyContent: "start",
              paddingLeft: "20px",

              gap: "20px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            <AccountBoxIcon />
            <Typography variant="h6">Profile</Typography>
          </Button>
        </Link>
        <HandleButton
          styles={{ height: "10%", marginTop: "100px", suggestedUser: false }}
        />
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
