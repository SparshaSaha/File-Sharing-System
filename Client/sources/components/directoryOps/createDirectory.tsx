import * as React from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { makeDirectory } from "./utils";

export const CreateDirectory = () => {
  const { currentDir, setCurrentDir } = React.useContext(GlobalContext);
  const folderName = React.useRef<HTMLInputElement>();
  const handleClick = async () => {
    const response = await makeDirectory(
      currentDir.path,
      folderName.current.value
    );
    alert(`${response.msg} Refresh to see changes...`)
  };

  return (
    <div>
      <input type="text" ref={folderName} />
      <button type="button" className="btn btn-dark ml-2" onClick={handleClick}>
        Create Directory
      </button>
    </div>
  );
};
