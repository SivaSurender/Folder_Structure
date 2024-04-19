import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function Folder() {
  const [isAddVisible, setIsAddvisible] = useState(false);
  return (
    <div
      className="main_container__folder"
      onMouseEnter={() => setIsAddvisible(true)}
      onMouseLeave={() => setIsAddvisible(false)}
    >
      {isAddVisible && (
        <IoMdAdd
          style={{ paddingTop: "4px", cursor: "pointer" }}
          onClick={() => {}}
        />
      )}
      <div className="folder_container">Folder</div>
    </div>
  );
}

export default Folder;
