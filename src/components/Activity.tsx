import { Avatar, Box, Typography, Modal } from "@mui/material";
import ActivityButtons from "./ActivityButtons";
import ActivityFullView from "./ActivityFullView";
import ClickableBox from "./ClickableBox";
import { ActivityReplyType, ActivityType } from "../types";
import { useState } from "react";

const Activity = ({
  activityItem,
  detailed,
  activityReplies,
}: {
  activityItem: ActivityType;
  detailed: boolean;
  activityReplies: ActivityReplyType[];
}) => {
  const [detailedView, setDetailedView] = useState(false);

  const created_date = new Date(activityItem.created_at);
  const expire_date = new Date(activityItem.expires_at);
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

  const expiresAtTimeDiffUnix = expire_date.getTime() - current_date.getTime();
  const expiresAtTimeDiffMinutes = expiresAtTimeDiffUnix / (1000 * 60);
  const expiresAtTimeDiffHours = expiresAtTimeDiffMinutes / 60;
  const expiresAtTimeDiffDays = expiresAtTimeDiffHours / 24;

  let formattedExpiresAtDate;
  if (expiresAtTimeDiffDays >= 1) {
    formattedExpiresAtDate = `Expires in ${Math.round(expiresAtTimeDiffDays)} ${
      expiresAtTimeDiffDays == 1 ? "day" : "days"
    }`;
  } else if (expiresAtTimeDiffHours >= 1) {
    formattedExpiresAtDate = `Expires in ${Math.round(
      expiresAtTimeDiffHours
    )} ${expiresAtTimeDiffHours == 1 ? "hour" : "hours"}`;
  } else if (expiresAtTimeDiffMinutes >= 1) {
    formattedExpiresAtDate = `Expires in ${Math.round(
      expiresAtTimeDiffMinutes
    )} ${expiresAtTimeDiffMinutes == 1 ? "min" : "mins"}`;
  } else {
    formattedExpiresAtDate = `Expires soon`;
  }

  return (
    <>
      <ClickableBox
        sx={{
          borderBottom: "solid grey 1px",
          minHeight: "120px",
          maxHeight: "300px",
          position: "relative",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setDetailedView(true);
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
            <Typography variant="body1">{formatedCreatedAtDate}</Typography>
            <Typography variant="body2">{formattedExpiresAtDate}</Typography>
          </Box>
        </Box>
        <Box sx={{ height: "30%", marginTop: "10px" }}>
          <ActivityButtons
            id={activityItem.id}
            activityReplies={activityReplies}
          />
        </Box>
      </ClickableBox>
      {detailed && (
        <Modal
          open={detailedView}
          onClose={() => setDetailedView(false)}
          aria-labelledby="activity-full-view"
          aria-describedby="detailed-view-of-activity"
        >
          <Box
            sx={{
              position: "fixed",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              width: "50%",
              height: "40%",
              overflowX: "auto",
              borderRadius: 2,
            }}
          >
            <ActivityFullView
              activityItem={activityItem}
              activityReplies={activityReplies}
              id={activityItem.id}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Activity;
