import { Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
// import SignUpPage from "./pages/signUpPage";
// import SignInPage from "./pages/signInPage";
import LayOut from "./pages/layout";
import ProfilePage from "./pages/profilePage";
import MessagesPage from "./pages/messagesPage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
