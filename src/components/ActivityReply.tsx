import { Avatar, Box, Typography } from "@mui/material";
import ActivityButtons from "./ActivityButtons";

import { ActivityReplyType } from "../types";
import { formatCreatedAtDate } from "../utils/formatDate";

const ActivityReply = ({
  activityReplyItem,
  activityReplies,
}: {
  activityReplyItem: ActivityReplyType;
  activityReplies: ActivityReplyType[];
}) => {
  const createdAt = formatCreatedAtDate(activityReplyItem.created_at);
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
          <Typography variant="body1">{createdAt}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "30%", marginTop: "10px" }}>
        {/* <ActivityButtons
          id={activityReplyItem.activity_id}
          activityReplies={activityReplies}
        /> */}
      </Box>
    </Box>
  );
};

export default ActivityReply;
