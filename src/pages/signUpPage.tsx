import { Box, Typography } from "@mui/material";

const signUpPage = () => {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "rgb( 74, 35, 90 )" }}>
      <Typography
        sx={{
          backgroundColor: "rgb( 23, 32, 42  )",
          textAlign: "center",
          padding: "20px",
        }}
        variant="h6"
      >
        Create your account!
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgb( 23, 32, 42  )",
          height: "50vh",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>
          Enter a valid email address
        </Typography>
      </Box>
    </Box>
  );
};

export default signUpPage;
