import { Avatar, Box, Typography } from "@mui/material";
import ActivityButtons from "./ActivityButtons";

const Activity = () => {
  return (
    <Box
      sx={{
        borderBottom: "solid grey 1px",
        minHeight: "120px",
        maxHeight: "300px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "start",
          marginLeft: "10px",
          height: "60%",
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" />
        <Box
          sx={{
            minHeight: "40%",
            minWidth: "70%",
            maxWidth: "80%",
            backgroundColor: "gold",
            wordWrap: "break-word",
          }}
        >
          <Typography variant="body1">Akmal Popalzi</Typography>
          <Typography variant="body2">@akmal98</Typography>
          <Typography variant="body1">Cloud is fun!</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 0,
            right: 20,
          }}
        >
          <Typography variant="body1">0m ago</Typography>
          <Typography variant="body2">30m</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "30%", marginTop: "10px" }}>
        <ActivityButtons />
      </Box>
    </Box>
  );
};

export default Activity;
