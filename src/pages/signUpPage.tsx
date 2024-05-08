import { Box, Button, Typography } from "@mui/material";
import { FormEvent } from "react";

const SignUpPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "rgb(74, 35, 90)" }}>
      <Typography
        sx={{
          backgroundColor: "rgb(23, 32, 42)",
          textAlign: "center",
          padding: "20px",
        }}
        variant="h6"
      >
        Create your account!
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgb(23, 32, 42)",
          height: "60vh",
          borderRadius: "20px",
          padding: "1px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Name</Typography>
          <input style={{ width: "20%", marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Username</Typography>
          <input style={{ width: "20%", marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Enter a valid email address
          </Typography>
          <input style={{ width: "20%", marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>New password</Typography>
          <input style={{ width: "20%", marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Confirm Password</Typography>
          <input style={{ width: "20%", marginTop: "10px" }} />
        </Box>
        <Button
          sx={{
            backgroundColor: "rgb(74, 35, 90)",
            color: "white",
            margin: "30px auto",
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
