import React, { useState } from "react";
import data from "../../tree.json";
import AppContext from "./AppContext";

function AppContextProvider({ children }) {
  const [mainState, setMainState] = useState(data || {});
  return (
    <AppContext.Provider value={{ mainState, setMainState }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
