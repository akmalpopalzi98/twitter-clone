import { Button, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import LogOut from "./LogOut";

const handleButton = ({
  styles,
}: {
  styles: { height: string; marginTop?: string; suggestedUser: boolean };
}) => {
  const [clicked, setClicked] = useState(false);

  const hoverBackgroundColor = !styles.suggestedUser
    ? "rgba(255, 255, 255, 0.2)"
    : "None";

  return (
    <Box
      sx={{ width: "100%", marginTop: styles.marginTop, height: styles.height }}
    >
      <Button
        disabled={styles.suggestedUser}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "start",
          color: "white",
          gap: "20px",

          "&:hover": {
            backgroundColor: hoverBackgroundColor,
          },
        }}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" />
        <Typography sx={{ color: "white" }} variant="body2">
          @handle
        </Typography>
      </Button>
      {clicked && <LogOut />}
    </Box>
  );
};

export default handleButton;
