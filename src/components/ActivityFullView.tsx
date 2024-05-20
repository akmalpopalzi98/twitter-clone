import Box from "@mui/material/Box";
import Activity from "./Activity";
import { ActivityType } from "../types";

const ActivityFullView = ({ activityItem }: { activityItem: ActivityType }) => {
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
      <Activity activityItem={activityItem} detailed={false} />
    </Box>
  );
};

export default ActivityFullView;
