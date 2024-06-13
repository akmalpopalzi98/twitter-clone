import { Box, Button, Typography } from "@mui/material";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import HandleButton from "../components/handleButton";

const SignInPage = () => {
  const { setLoggedIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [notif, setNotif] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotif("");
    }, 7000);

    return () => clearTimeout(timer);
  }, [notif]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted");
    if (!email || !password) {
      console.log("Please fill all fields");
      setNotif("Please fill all fields");
      return;
    }

    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });
      if (isSignedIn) {
        setLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      }
    } catch (err: any) {
      console.log(err);
      setNotif(err.message);
    }
  };

  const notifAlert = (
    <Box
      sx={{
        backgroundColor: "rgb(23, 32, 42)",
        width: "40%",
        borderRadius: "20px",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>{notif}</Typography>
    </Box>
  );
  return (
    <Box sx={{ height: "100vh", backgroundColor: "rgb(74, 35, 90)" }}>
      <Box
        sx={{
          backgroundColor: "rgb(23, 32, 42)",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h6">Sign In !</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(23, 32, 42)",
          borderRadius: "20px",
          width: "60%",
          padding: "1px",
          margin: "0 auto",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Email</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>Password</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            value={password}
            onChange={(e) => {
              setPassord(e.target.value);
            }}
            type="password"
          />
        </Box>
        <Button
          sx={{
            backgroundColor: "rgb(74, 35, 90)",
            color: "white",
            margin: "30px auto",
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
      {notifAlert}
      {/* <HandleButton styles={{ height: "200px", suggestedUser: false }} /> */}
    </Box>
  );
};

export default SignInPage;
