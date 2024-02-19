import { Box, Typography } from "@mui/material";

const messagesPage = () => {
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
        <Typography sx={{ marginTop: "20px" }}>Messages</Typography>
      </Box>
    </Box>
  );
};

export default messagesPage;
