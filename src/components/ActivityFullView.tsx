import Box from "@mui/material/Box";
import Activity from "./Activity";
import { ActivityReplyType, ActivityType } from "../types";
import ActivityReply from "./ActivityReply";

const ActivityFullView = ({
  activityItem,
  activityReplies,
  id,
}: {
  activityItem: ActivityType;
  activityReplies: ActivityReplyType[];
  id: Number;
}) => {
  const filteredItems = activityReplies.filter(
    (activity) => activity.activity_id === id
  );

  console.log(filteredItems);
  return (
    <Box
      sx={{
        backgroundColor: "red",
        borderBottom: "solid grey 1px",
        minHeight: "120px",
        maxHeight: "100vh",
        position: "absolute",
        marginTop: "10px",
        width: "90%",
      }}
    >
      <Activity
        activityItem={activityItem}
        detailed={false}
        activityReplies={activityReplies}
      />
    </Box>
  );
};

export default ActivityFullView;
