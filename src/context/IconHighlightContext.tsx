import { useState, createContext, ReactNode } from "react";

interface IconHighlightContextProviderProps {
  children: ReactNode;
}

interface IconHighlightContextType {
  icon: string;
  setIcon: React.Dispatch<React.SetStateAction<string>>;
}

const IconHighlightContext = createContext<IconHighlightContextType>({
  icon: "home",
  setIcon: () => {},
});

const IconHighlightContextProvider = ({
  children,
}: IconHighlightContextProviderProps) => {
  const [icon, setIcon] = useState("home");
  const values = {
    icon,
    setIcon,
  };
  return (
    <IconHighlightContext.Provider value={values}>
      {children}
    </IconHighlightContext.Provider>
  );
};

export { IconHighlightContextProvider, IconHighlightContext };
