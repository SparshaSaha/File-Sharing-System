import * as React from "react";
import * as CSS from "csstype";
import { ListHeader } from "./header/header";
import { DataList } from "./listItem/dataList";

interface IFileListProps {
  headerNames: string[];
  data: string[][];
  directoryOnClick: (event: React.SyntheticEvent, path: string) => void;
  fileOnClick: (event: React.SyntheticEvent, path: string) => void;
}

const fileListStyles: CSS.Properties = {
  marginLeft: "10rem",
};

export const FileList = (props: IFileListProps): JSX.Element => {
  const { headerNames, data, directoryOnClick, fileOnClick } = props;
  return (
    <div style={fileListStyles}>
      <ListHeader coloumnNames={headerNames} />
      <DataList
        dataRows={data}
        directoryOnClick={directoryOnClick}
        fileOnClick={fileOnClick}
      />
    </div>
  );
};
