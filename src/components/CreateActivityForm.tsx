import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getCurrentUser } from "aws-amplify/auth";
import axios from "axios";
import { useEffect, useState } from "react";

const CreateAcitivtyForm = () => {
  const [id, setId] = useState("");
  const [notif, setNotif] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    message,
  };

  const getUserCreds = async () => {
    try {
      const { userId } = await getCurrentUser();
      setId(userId);
    } catch (err) {
      console.log(err);
    }
  };

  const postActivity = async () => {
    try {
      if (data.message.trim() !== "") {
        await axios.post("http://127.0.0.1:8000/addhomeactivity", data);
      } else {
        throw new Error("string is empty");
      }
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    getUserCreds();
  }, []);
  return (
    <Box
      component="form"
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        postActivity();
      }}
    >
      <textarea
        style={{
          width: "50%",
          height: "90%",
          resize: "none",
          fontFamily: "inherit",
        }}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />

      <Button
        sx={{
          borderRadius: "20px",
          backgroundColor: "rgb(23, 32, 42)",
          marginTop: "20px",
        }}
        type="submit"
      >
        <Typography>Submit</Typography>
      </Button>
    </Box>
  );
};

export default CreateAcitivtyForm;
