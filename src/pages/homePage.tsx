import { Box, Typography } from "@mui/material";
import HomepageSideBar from "../components/HomepageSideBar";
import Activity from "../components/Activity";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityType } from "../types";

const homePage = () => {
  const [activityList, setActivityList] = useState([]);
  const fetchActivities = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/homeactivities");
      if (response.status == 200) setActivityList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderedActivities = activityList.map((item: ActivityType) => {
    return <Activity activityItem={item} />;
  });

  useEffect(() => {
    fetchActivities();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "green",
        display: "flex",
        gap: "100px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          marginLeft: "80px",
          // height: "100%",
          backgroundColor: "rgb( 23, 32, 42 )",
          padding: "1px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            height: "5%",
            borderBottom: "solid white 1px",
          }}
        >
          <Typography sx={{ margin: "20px" }} variant="h6">
            Home
          </Typography>
          <Box>{renderedActivities}</Box>
        </Box>
      </Box>
      <HomepageSideBar />
    </Box>
  );
};

export default homePage;
