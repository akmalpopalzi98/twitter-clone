import { Box, Typography } from "@mui/material";
import HomepageSideBar from "../components/HomepageSideBar";
import Activity from "../components/Activity";

const homePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "green",
        display: "flex",
        gap: "100px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          marginLeft: "80px",
          // height: "100%",
          backgroundColor: "rgb( 23, 32, 42 )",
          padding: "1px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            height: "5%",
            borderBottom: "solid white 1px",
          }}
        >
          <Typography sx={{ margin: "20px" }} variant="h6">
            Home
          </Typography>
          <Box>
            <Activity />
          </Box>
        </Box>
      </Box>
      <HomepageSideBar />
    </Box>
  );
};

export default homePage;
