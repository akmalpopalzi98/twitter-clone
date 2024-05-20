import { Avatar, Box, Typography } from "@mui/material";
import ActivityButtons from "./ActivityButtons";

import { ActivityReplyType } from "../types";

const ActivityReply = ({
  activityReplyItem,
}: {
  activityReplyItem: ActivityReplyType;
}) => {
  const created_date = new Date(activityReplyItem.created_at);
  const current_date = new Date();

  // Calculate time differences
  const createdAttimeDiffUnix = current_date.getTime() - created_date.getTime();
  const createdAtTimeDiffMinutes = createdAttimeDiffUnix / (1000 * 60);
  const createdAtTimeDiffHours = createdAtTimeDiffMinutes / 60;
  const createdAtTimeDiffDays = createdAtTimeDiffHours / 24;

  let formatedCreatedAtDate;
  if (createdAtTimeDiffDays >= 1) {
    formatedCreatedAtDate = `${Math.round(createdAtTimeDiffDays)} ${
      createdAtTimeDiffDays == 1 ? "day ago" : "days ago"
    }`;
  } else if (createdAtTimeDiffHours >= 1) {
    formatedCreatedAtDate = `${Math.round(createdAtTimeDiffHours)} ${
      createdAtTimeDiffHours == 1 ? "hour ago" : "hours ago"
    }`;
  } else if (createdAtTimeDiffMinutes >= 1) {
    formatedCreatedAtDate = `${Math.round(createdAtTimeDiffMinutes)} ${
      createdAtTimeDiffMinutes == 1 ? "min ago" : "mins ago"
    }`;
  } else {
    formatedCreatedAtDate = `just now`;
  }

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
          <Typography variant="body1">{activityReplyItem.name}</Typography>
          <Typography variant="body2">{activityReplyItem.handle}</Typography>
          <Typography variant="body1">
            {activityReplyItem.reply_message}
          </Typography>
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
          <Typography variant="body1">{formatedCreatedAtDate}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "30%", marginTop: "10px" }}>
        <ActivityButtons id={activityReplyItem.activity_id} />
      </Box>
    </Box>
  );
};

export default ActivityReply;
