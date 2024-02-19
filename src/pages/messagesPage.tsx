import { Box, Typography } from "@mui/material";

const messagesPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb( 23, 32, 42  )",
        marginLeft: "100px",
        width: "40%",
      }}
    >
      <Typography sx={{ color: "white", margin: "10px 0 20px 20px" }}>
        Messages
      </Typography>
    </Box>
  );
};

export default messagesPage;
