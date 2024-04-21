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
          marginLeft: "80px",
          height: "100%",
          backgroundColor: "green",
          padding: "1px",
        }}
      >
        <Box
          sx={{
            height: "5%",
            borderBottom: "solid white 2px",
          }}
        >
          <Typography sx={{ margin: "20px" }} variant="h6">
            Messages
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default messagesPage;
