import { ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
// import SignUpPage from "./pages/signUpPage";
// import SignInPage from "./pages/signInPage";
import LayOut from "./pages/layout";
import ProfilePage from "./pages/profilePage";
import MessagesPage from "./pages/messagesPage";
import "./app.css";

const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "Kanit",
    },
    h6: {
      fontFamily: "Kanit,Serif",
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
