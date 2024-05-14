import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { IconHighlightContextProvider } from "./context/IconHighlightContext.tsx";
import { AuthenticationContextProvider } from "./context/AuthenticationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthenticationContextProvider>
    <IconHighlightContextProvider>
      <App />
    </IconHighlightContextProvider>
  </AuthenticationContextProvider>
);
