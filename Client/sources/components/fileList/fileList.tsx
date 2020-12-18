import * as React from "react";
import { ListHeader } from "./header/header";
import * as CSS from "csstype";
import { ListRow } from "./listItem/listRow";
import { DataList } from "./listItem/dataList";

interface IFileListProps {
  headerNames: string[];
  data: string[][];
}

const fileListStyles: CSS.Properties = {
  marginLeft: "10rem",
};

export const FileList = (props: IFileListProps): JSX.Element => {
  const { headerNames, data } = props;
  return (
    <div style={fileListStyles}>
      <ListHeader coloumnNames={headerNames} />
      <DataList dataRows={data} />
    </div>
  );
};
