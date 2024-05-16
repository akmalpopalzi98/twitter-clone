import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { signOut } from "aws-amplify/auth";
import { useContext } from "react";

const LogOut = () => {
  const { setLoggedIn } = useContext(AuthenticationContext);
  const handleLogOut = async () => {
    await signOut();
    setLoggedIn(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(23, 32, 42)",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <Button
        sx={{ width: "100%", borderRadius: "20px" }}
        onClick={handleLogOut}
      >
        <Typography>Log out</Typography>
      </Button>
    </Box>
  );
};

export default LogOut;
