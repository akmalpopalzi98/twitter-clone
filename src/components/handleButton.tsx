import { Button, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const handleButton = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Box sx={{ width: "100%", marginTop: "100px", height: "90%" }}>
      <Button
        sx={{
          height: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "start",
          color: "white",
          gap: "20px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography variant="body1">@handle</Typography>
      </Button>
    </Box>
  );
};

export default handleButton;
