import React from "react";
import Folder from "./Folder";
import { useApp } from "../hooks/useApp";

function Tree() {
  const { mainState } = useApp();

  console.log(mainState, "dfsdfj");
  return (
    <div className="main-tree__container">
      <div className="main-sub__conatiner">
        {mainState.data.map((item) => (
          <Folder key={item.identifier} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Tree;
