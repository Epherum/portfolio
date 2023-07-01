import { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [black, setBlack] = useState(false);
  const toggleColor = () => {
    setBlack(!black);
  };
  return (
    <ColorContext.Provider value={{ black, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
