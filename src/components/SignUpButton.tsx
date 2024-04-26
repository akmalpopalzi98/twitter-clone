import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SignUpButton = () => {
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
        <Typography variant="body1">Sign Up !</Typography>
      </Button>
    </Box>
  );
};

export default SignUpButton;
