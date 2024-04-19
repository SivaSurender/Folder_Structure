import React from "react";
import Folder from "./Folder";
import { useApp } from "../hooks/useApp";

function Tree() {
  const { mainState, setMainState } = useApp();

  console.log(mainState, "dfsdfj");
  return (
    <div className="main-tree__container">
      <div className="main-sub__conatiner">
        <Folder />
      </div>
    </div>
  );
}

export default Tree;
