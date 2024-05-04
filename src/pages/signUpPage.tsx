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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Enter a valid email address
          </Typography>
          <input style={{ width: "20%", marginTop: "10px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default signUpPage;
