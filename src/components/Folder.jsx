import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useApp } from "../hooks/useApp";
import { SiTicktick } from "react-icons/si";

function Folder({ name, identifier, isEditOpen }) {
  const [isAddVisible, setIsAddvisible] = useState(null);
  const [addedName, setAddedName] = useState(name);

  const { setMainState } = useApp();

  const addFolderHandle = (data) => {
    console.log(data, "sdsjdyh");

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
            isEditOpen: true,
          },
        ],
      };
    });
  };

  const hanldleNameSave = (id) => {
    setMainState((prev) => {
      console.log({ id, prev }, "dfsjfh");
      return {
        ...prev,
        data: prev.data.map((item) =>
          item.identifier === id
            ? { ...item, name: addedName, isEditOpen: false }
            : item
        ),
      };
    });
  };
  return (
    <div
      className="main_container__folder"
      onMouseEnter={() => setIsAddvisible(identifier)}
      onMouseLeave={() => setIsAddvisible(null)}
    >
      {identifier === isAddVisible && isEditOpen && (
        <IoMdAdd
          style={{ paddingTop: "4px", cursor: "pointer" }}
          onClick={() => addFolderHandle(identifier)}
        />
      )}
      <div className="folder_container">
        {isEditOpen ? (
          <>
            <input
              defaultValue={name}
              id={identifier}
              className="folder_input"
              onChange={(e) => setAddedName(e.target.value)}
            />
            <SiTicktick
              style={{
                cursor: "pointer",
                padding: "2px",
                height: "1em",
                width: "0.8em",
              }}
              onClick={() => hanldleNameSave(identifier)}
            />
          </>
        ) : (
          name
        )}
      </div>
    </div>
  );
}

export default Folder;
