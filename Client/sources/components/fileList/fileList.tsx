import * as React from "react";
import { ListHeader } from "./header/header";
import { DataList } from "./listItem/dataList";
//import "../../styles/fileList.css";

interface IFileListProps {
  headerNames: string[];
  data: string[][];
  directoryOnClick: (event: React.SyntheticEvent, path: string) => void;
  fileOnClick: (event: React.SyntheticEvent, path: string) => void;
}

export const FileList = (props: IFileListProps): JSX.Element => {
  const { headerNames, data, directoryOnClick, fileOnClick } = props;
  return (
    <div className="fileListDivContainer">
      <ListHeader coloumnNames={headerNames} />
      <DataList
        dataRows={data}
        directoryOnClick={directoryOnClick}
        fileOnClick={fileOnClick}
      />
    </div>
  );
};
