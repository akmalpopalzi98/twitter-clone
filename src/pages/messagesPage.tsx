import { Box, Typography } from "@mui/material";
import { IconHighlightContext } from "../context/IconHighlightContext";
import { useContext, useEffect } from "react";

const messagesPage = () => {
  const { setIcon } = useContext(IconHighlightContext);

  useEffect(() => {
    setIcon("messages");
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "rgb( 23, 32, 42  )",
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
            Messages
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default messagesPage;
