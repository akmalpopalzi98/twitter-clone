import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SignInButton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb( 23, 32, 42  )",
        height: "5%",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <Button sx={{ width: "100%", height: "100%" }}>
        <Typography variant="body1">Sign In</Typography>
      </Button>
    </Box>
  );
};

export default SignInButton;
