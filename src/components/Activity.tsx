import { Avatar, Box, Typography } from "@mui/material";

const Activity = () => {
  return (
    <Box
      sx={{
        borderBottom: "solid grey 1px",
        height: "120px",
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
        <Box sx={{ height: "40%" }}>
          <Typography variant="body1">Akmal Popalzi</Typography>
          <Typography variant="body2">@akmal98</Typography>
          <Typography variant="body1">Cloud is fun!!</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <Typography variant="body1">0m ago</Typography>
          <Typography variant="body2">30m</Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "brown", height: "40%" }}>Buttons</Box>
    </Box>
  );
};

export default Activity;
