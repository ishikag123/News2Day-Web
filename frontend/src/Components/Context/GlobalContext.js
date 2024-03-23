import React from "react";
import { createContext, useState } from "react";
export const Global = createContext(null);

export const GlobalContext = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  return (
    <Global.Provider
      value={{
        mobile,
        setMobile,
      }}
    >
      {children}
    </Global.Provider>
  );
};
