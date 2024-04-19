import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tree from "./components/Tree";
import "./App.css";
import data from "../tree.json";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Tree />
    </AppContextProvider>
  );
}

export default App;
