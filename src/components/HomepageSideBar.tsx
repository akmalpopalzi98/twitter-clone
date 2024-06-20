import { Button, Modal, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import HandleButton from "./handleButton";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import CreateAcitivtyForm from "./CreateActivityForm";

const HomepageSideBar = () => {
  const { loggedIn } = useContext(AuthenticationContext);
  const [openModal, setOpenModal] = useState(false);

  const TrendingListItem = ({
    trendingData,
  }: {
    trendingData: {
      main: string;
      subTitle: string;
    };
  }) => {
    return (
      <Box sx={{ paddingTop: "10px", paddingLeft: "10px" }}>
        <Typography variant="body1">{trendingData.main}</Typography>
        <Typography variant="body2">{trendingData.subTitle}</Typography>
      </Box>
    );
  };

  const trendingList = [
    { main: "#AWSCLOUDBOOTCAMP", subTitle: "#2,345 cruds" },
    { main: "#CloudProject", subTitle: "#1,239 cruds" },
    { main: "#AWS", subTitle: "#2,239 cruds" },
    { main: "#Cloud", subTitle: "#1,000 cruds" },
    { main: "#Project", subTitle: "#5,342 cruds" },
  ];
  const renderedItems = trendingList.map((obj, ind) => {
    return (
      <Box key={ind}>
        <TrendingListItem trendingData={obj} />
      </Box>
    );
  });

  return (
    <Box
      sx={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField sx={{ width: "100%", marginTop: "10px" }} label="Search" />
      <Box
        sx={{
          backgroundColor: "rgb( 23, 32, 42  )",
          height: "38%",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            borderBottom: "solid white 2px",
            height: "10%",
          }}
        >
          <Typography sx={{ margin: "5px" }} variant="body1">
            Trending
          </Typography>
        </Box>
        {renderedItems}
      </Box>

      <Box
        sx={{
          backgroundColor: "rgb(  23, 32, 42  )",
          height: "15%",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            borderBottom: "solid white 2px",
            height: "35%",
          }}
        >
          <Typography sx={{ margin: "5px" }} variant="body1">
            Suggested Users
          </Typography>
          <HandleButton
            styles={{ height: "100%", marginTop: "40px", suggestedUser: true }}
          />
        </Box>
      </Box>
      {!loggedIn && (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      )}
      {loggedIn && (
        <Button
          sx={{
            width: "100%",
            borderRadius: "20px",
            backgroundColor: "rgb(23, 32, 42)",
          }}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <Typography>Create Activity</Typography>
        </Button>
      )}

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="activity-full-view"
        aria-describedby="detailed-view-of-activity"
      >
        <Box
          sx={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgb( 74, 35, 90 )",
            boxShadow: 24,
            p: 4,
            width: "40%",
            height: "20%",
            overflowX: "auto",
            borderRadius: 2,
          }}
        >
          <CreateAcitivtyForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default HomepageSideBar;
