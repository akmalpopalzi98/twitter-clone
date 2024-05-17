import { ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignUpPage from "./pages/signUpPage";
import LayOut from "./pages/layout";
import ProfilePage from "./pages/profilePage";
import MessagesPage from "./pages/messagesPage";
import "./app.css";
import SignInPage from "./pages/signInPage";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_tP07VSWGO",
      userPoolClientId: "60ch77n588stac0hkni9mb06t4",
    },
  },
});
const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "Kanit",
      color: "white",
    },
    h6: {
      fontFamily: "Kanit,Serif",
      color: "white",
    },
    body2: {
      color: "grey",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Route>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
