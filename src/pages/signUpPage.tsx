import { Box, Button, Typography } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import { signUp } from "aws-amplify/auth";
import { AuthenticationContext } from "../context/AuthenticationContext";

const SignUpPage = () => {
  const {
    signUpUsername,
    setSignUpUsername,
    signUpName,
    setSignUpName,
    signUpEmail,
    setSignUpEmail,
    signUpNewPassword,
    setSignUpNewPassword,
    signUpPasswordConfirm,
    setSignUpPasswordConfirm,
  } = useContext(AuthenticationContext);

  const [notif, setNotif] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check if any field is blank
    if (
      !signUpName ||
      !signUpEmail ||
      !signUpUsername ||
      !signUpNewPassword ||
      !signUpPasswordConfirm
    ) {
      setNotif("Please fill in all fields");
      return;
    }

    // Check if passwords match
    if (signUpNewPassword !== signUpPasswordConfirm) {
      setNotif("Passwords do not match");
      return;
    }

    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: signUpEmail,
        password: signUpNewPassword,
        options: {
          userAttributes: {
            preferred_username: signUpUsername,
            name: signUpName,
          },
        },
      });

      if (nextStep.signUpStep == "CONFIRM_SIGN_UP") {
        setNotif(
          "Please validate your account by cliking on the link sent to your email"
        );
        setSignUpEmail("");
        setSignUpName("");
        setSignUpPasswordConfirm("");
        setSignUpNewPassword("");
        setSignUpUsername("");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  if (notif) {
    setTimeout(() => {
      setNotif("");
    }, 9000);
  }

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
      <Typography
        sx={{
          backgroundColor: "rgb(23, 32, 42)",
          textAlign: "center",
          padding: "20px",
        }}
        variant="h6"
      >
        Create your account!
      </Typography>

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
          <Typography sx={{ textAlign: "center" }}>Name</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            value={signUpName}
            onChange={(e) => {
              setSignUpName(e.target.value);
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
          <Typography sx={{ textAlign: "center" }}>Email</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            value={signUpEmail}
            onChange={(e) => {
              setSignUpEmail(e.target.value);
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
          <Typography sx={{ textAlign: "center" }}>Username</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            value={signUpUsername}
            onChange={(e) => {
              setSignUpUsername(e.target.value);
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
          <Typography sx={{ textAlign: "center" }}>New Password</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            type="password"
            value={signUpNewPassword}
            onChange={(e) => {
              setSignUpNewPassword(e.target.value);
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
          <Typography sx={{ textAlign: "center" }}>Confirm Password</Typography>
          <input
            style={{ width: "20%", marginTop: "10px" }}
            type="password"
            value={signUpPasswordConfirm}
            onChange={(e) => {
              setSignUpPasswordConfirm(e.target.value);
            }}
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
    </Box>
  );
};

export default SignUpPage;
