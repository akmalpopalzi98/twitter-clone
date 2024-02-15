import { Button, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const handleButton = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "100px", height: "90%" }}>
      <Button
        sx={{
          height: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        handle
      </Button>
    </Box>
  );
};

export default handleButton;
