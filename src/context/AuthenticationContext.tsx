import { createContext, ReactNode, useState } from "react";

interface AuthenticationContextProviderProps {
  children: ReactNode;
}

interface AuthenticationContextType {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  signUpName: string;
  setSignUpName: React.Dispatch<React.SetStateAction<string>>;
  signUpUsername: string;
  setSignUpUsername: React.Dispatch<React.SetStateAction<string>>;
  signUpEmail: string;
  setSignUpEmail: React.Dispatch<React.SetStateAction<string>>;
  signUpNewPassword: string;
  setSignUpNewPassword: React.Dispatch<React.SetStateAction<string>>;
  signUpPasswordConfirm: string;
  setSignUpPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}

const AuthenticationContext = createContext<AuthenticationContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
  signUpName: "",
  setSignUpName: () => {},
  signUpUsername: "",
  setSignUpUsername: () => {},
  signUpEmail: "",
  setSignUpEmail: () => {},
  signUpNewPassword: "",
  setSignUpNewPassword: () => {},
  signUpPasswordConfirm: "",
  setSignUpPasswordConfirm: () => {},
});

const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUpName, setSignUpName] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpNewPassword, setSignUpNewPassword] = useState("");
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState("");

  const values = {
    loggedIn,
    setLoggedIn,
    signUpName,
    setSignUpName,
    signUpUsername,
    setSignUpUsername,
    signUpEmail,
    setSignUpEmail,
    signUpNewPassword,
    setSignUpNewPassword,
    signUpPasswordConfirm,
    setSignUpPasswordConfirm,
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider, AuthenticationContext };
