import * as React from "react";
import { removeDirectory } from "./utils";

export const DeleteDirectory = () => {
  const inputRef = React.useRef<HTMLInputElement>();

  const handleClick = async () => {
    const msg = await removeDirectory(inputRef.current.value);
    alert(`${msg.msg} Refresh to see changes....`)
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
