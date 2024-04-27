import { Box, Typography } from "@mui/material";
import { IconHighlightContext } from "../context/IconHighlightContext";
import { useContext, useEffect } from "react";

const profilePage = () => {
  const { setIcon } = useContext(IconHighlightContext);

  useEffect(() => {
    setIcon("profile");
  });
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "50%",
          marginLeft: "80px",
          height: "100%",
          backgroundColor: "rgb( 23, 32, 42 )",
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
            Profile
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default profilePage;
