import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import HandleButton from "./handleButton";

const HomepageSideBar = () => {
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
          backgroundColor: "rgb( 39, 55, 70 )",
          height: "40%",
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
          backgroundColor: "rgb( 39, 55, 70 )",
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
    </Box>
  );
};

export default HomepageSideBar;
