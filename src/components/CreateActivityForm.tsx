import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CreateAcitivtyForm = () => {
  return (
    <Box
      component="form"
      sx={{
        height: "50%",
        display: "flex",
        justifyContent: "center",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("lol");
      }}
    >
      <textarea style={{ width: "50%", height: "50%", resize: "none" }} />
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default CreateAcitivtyForm;
