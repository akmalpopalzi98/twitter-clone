import { Box, Typography } from "@mui/material";
import HomepageSideBar from "../components/HomepageSideBar";

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
          backgroundColor: "rgb( 39, 55, 70 )",
          padding: "1px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            height: "5%",
            borderBottom: "solid white 2px",
          }}
        >
          <Typography sx={{ margin: "20px" }} variant="h6">
            Home
          </Typography>
        </Box>
      </Box>
      <HomepageSideBar />
    </Box>
  );
};

export default homePage;
