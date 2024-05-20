import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityReplyType } from "../types";
const ActivityButtons = ({ id }: { id: Number }) => {
  const [activityReplies, setActivityReplies] = useState<ActivityReplyType[]>(
    []
  );
  const [showReplies, setShowReplies] = useState(false);

  const fetchReplies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/homeactivitiesreplies"
      );
      if (response.status == 200) {
        setActivityReplies(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReplies();
  }, []);

  const filteredItems = activityReplies.filter(
    (activity) => activity.activity_id === id
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Button
        sx={{
          ...buttonsStyling,
        }}
        onClick={() => {
          setShowReplies(!showReplies);
          console.log(id);
        }}
      >
        <ModeCommentOutlinedIcon sx={{ color: "white" }} />
        {filteredItems.length}
      </Button>
      <Button sx={{ ...buttonsStyling }}>
        <RepeatOutlinedIcon sx={{ color: "white" }} />
      </Button>
      <Button sx={{ ...buttonsStyling }}>
        <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
      </Button>
      <Button sx={{ ...buttonsStyling }}>
        <IosShareOutlinedIcon sx={{ color: "white" }} />
      </Button>
    </Box>
  );
};

const buttonsStyling = {
  height: "60%",
  width: "5%",
};

export default ActivityButtons;
