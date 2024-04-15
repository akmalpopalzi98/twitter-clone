import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const HomepageSideBar = () => {
  return (
    <Box
      sx={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField sx={{ width: "100%", marginTop: "10px" }} />
      <Box
        sx={{
          backgroundColor: "rgb( 39, 55, 70 )",
          height: "40%",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            borderBottom: "solid white 2px",
            height: "10%",
          }}
        >
          <Typography sx={{ margin: "5px" }} variant="body1">
            Trending
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomepageSideBar;
