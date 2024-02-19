import { Box, Typography } from "@mui/material";

const homePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgb( 23, 32, 42  )",
      }}
    >
      <Box
        sx={{
          width: "50%",
          marginLeft: "100px",
          height: "100%",
          backgroundColor: "green",
          padding: "1px",
        }}
      >
        <Typography sx={{ marginTop: "20px" }}>Home</Typography>
      </Box>
    </Box>
  );
};

export default homePage;
