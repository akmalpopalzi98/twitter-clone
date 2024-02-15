import { Box, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import HandleButton from "../components/handleButton";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgb(52, 73, 94)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgb(187, 143, 206)",
          display: "flex",
          height: "100vh",
          width: "20%",
          flexDirection: "column",
          justifyContent: "start",
          paddingTop: "20px",
        }}
      >
        <Diversity2Icon
          sx={{ width: "100%", marginBottom: "100px", height: "10%" }}
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            Home
          </Button>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
            Messages
          </Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "100%",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            variant="text"
          >
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
