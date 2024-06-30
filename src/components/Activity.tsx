import { Avatar, Box, Typography, Modal } from "@mui/material";
import ActivityButtons from "./ActivityButtons";
import ActivityFullView from "./ActivityFullView";
import ClickableBox from "./ClickableBox";
import { ActivityReplyType, ActivityType } from "../types";
import { useState } from "react";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { formatCreatedAtDate, formatExpiresAtDate } from "../utils/formatDate";

const Activity = ({
  activityItem,
  detailed,
  activityReplies,
}: {
  activityItem: ActivityType;
  detailed?: boolean;
  activityReplies: ActivityReplyType[];
}) => {
  const { loggedIn } = useContext(AuthenticationContext);
  const [detailedView, setDetailedView] = useState(false);

  const createdAt = formatCreatedAtDate(activityItem.created_at);
  const expiresAt = formatExpiresAtDate(activityItem);

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
              width: "20%",
            }}
          >
            <Typography variant="body1">{createdAt}</Typography>
            <Typography variant="body2">{expiresAt}</Typography>
          </Box>
        </Box>
        <Box sx={{ height: "30%", marginTop: "10px" }}>
          <ActivityButtons
            id={activityItem.id}
            activityReplies={activityReplies}
          />
        </Box>
      </ClickableBox>
      {loggedIn && detailed && (
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
              bgcolor: "rgb( 74, 35, 90 )",
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
