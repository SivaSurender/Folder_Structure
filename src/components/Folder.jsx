import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function Folder({ name, identifier }) {
  const [isAddVisible, setIsAddvisible] = useState(null);
  console.log(identifier, "dsdj");
  return (
    <div
      className="main_container__folder"
      onMouseEnter={() => setIsAddvisible(identifier)}
      onMouseLeave={() => setIsAddvisible(null)}
    >
      {identifier === isAddVisible && (
        <IoMdAdd
          style={{ paddingTop: "4px", cursor: "pointer" }}
          onClick={() => {}}
        />
      )}
      <div className="folder_container">{name}</div>
    </div>
  );
}

export default Folder;
