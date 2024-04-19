import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useApp } from "../hooks/useApp";

function Folder({ name, identifier }) {
  const [isAddVisible, setIsAddvisible] = useState(null);

  const { setMainState } = useApp();

  const addFolderHandle = (data) => {
    console.log(data, "sdsjdyh");
    //  {
    //       "identifier": "one",
    //       "type": "folder",
    //       "name": "Folder1",
    //       "hasChild": false
    //     }
    setMainState((prev) => {
      return {
        ...prev,
        data: [
          ...prev.data,
          {
            identifier: Math.random(),
            type: "folder",
            name: "foldertwo",
            hasChild: false,
          },
        ],
      };
    });
  };

  return (
    <div
      className="main_container__folder"
      onMouseEnter={() => setIsAddvisible(identifier)}
      onMouseLeave={() => setIsAddvisible(null)}
    >
      {identifier === isAddVisible && (
        <IoMdAdd
          style={{ paddingTop: "4px", cursor: "pointer" }}
          onClick={() => addFolderHandle(identifier)}
        />
      )}
      <div className="folder_container">{name}</div>
    </div>
  );
}

export default Folder;
