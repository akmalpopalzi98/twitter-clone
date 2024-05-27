import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const AddActivity = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(23, 32, 42)",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <Button sx={{ width: "100%", borderRadius: "20px" }}>
        <Typography>Create Activity</Typography>
      </Button>
    </Box>
  );
};

export default AddActivity;
