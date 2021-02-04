import * as React from "react";
import { removeDirectory } from "./utils";

export const DeleteDirectory = () => {
  const inputRef = React.useRef<HTMLInputElement>();

  const handleClick = async () => {
    await removeDirectory(inputRef.current.value);
  };

  return (
    <div>
      Path : <input type="text" ref={inputRef} />
      <button type="button" className="btn btn-info ml-2" onClick={handleClick}>
        Delete File/Directory
      </button>
    </div>
  );
};
