import { createContext, ReactNode, useState } from "react";

interface AuthenticationContextProviderProps {
  children: ReactNode;
}

interface AuthenticationContextType {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthenticationContext = createContext<AuthenticationContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
});

const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const values = {
    loggedIn,
    setLoggedIn,
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider, AuthenticationContext };
