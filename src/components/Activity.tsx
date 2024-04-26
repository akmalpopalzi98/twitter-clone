import { Avatar, Box, Typography } from "@mui/material";
import ActivityButtons from "./ActivityButtons";

import { ActivityType } from "../types";

const Activity = ({ activityItem }: { activityItem: ActivityType }) => {
  return (
    <Box
      sx={{
        borderBottom: "solid grey 1px",
        minHeight: "120px",
        maxHeight: "300px",
        position: "relative",
        marginTop: "10px",
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
            wordWrap: "break-word",
          }}
        >
          <Typography variant="body1">{activityItem.name}</Typography>
          <Typography variant="body2">{activityItem.handle}</Typography>
          <Typography variant="body1">{activityItem.message}</Typography>
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
          <Typography variant="body1">{activityItem.created_at}</Typography>
          <Typography variant="body2">{activityItem.expires_at}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "30%", marginTop: "10px" }}>
        <ActivityButtons />
      </Box>
    </Box>
  );
};

export default Activity;
