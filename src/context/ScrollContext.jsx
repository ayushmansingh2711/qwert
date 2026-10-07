import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
