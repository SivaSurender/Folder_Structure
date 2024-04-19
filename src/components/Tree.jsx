import React from "react";
import Folder from "./Folder";
import { useApp } from "../hooks/useApp";

function Tree() {
  const { mainState } = useApp();

  console.log(mainState, "dfsdfj");
  return (
    <div className="main-tree__container">
      {mainState.map((item) => (
        <div key={item.identifier} className="main-sub__conatiner">
          <Folder {...item} />
        </div>
      ))}
    </div>
  );
}

export default Tree;
